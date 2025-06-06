-module(bank_account).
-behavior(gen_statem).

-export([callback_mode/0, init/1, terminate/3, code_change/4]).
-export([open/3, closed/3]).
-export([balance/1, charge/2, close/1, create/0, deposit/2, withdraw/2, test_version/0]).

balance(Pid) ->
	gen_statem:call(Pid, balance).

charge(Pid, Amount) ->
	gen_statem:call(Pid, {charge, Amount}).

close(Pid) ->
	gen_statem:call(Pid, close).

create() ->
	{ok, Pid}=gen_statem:start_link(?MODULE, [], []),
	Pid.

deposit(Pid, Amount) ->
	gen_statem:call(Pid, {deposit, Amount}).

withdraw(Pid, Amount) ->
	gen_statem:call(Pid, {withdraw, Amount}).

callback_mode() -> state_functions.

init([]) -> {ok, open, 0}.

open({call, From}, {deposit, N}, Balance) ->
	{NewBalance, Reply}=
	case N>=0 of
		true -> {Balance+N, Balance+N};
		false -> {Balance, Balance}
	end,
	{next_state, open, NewBalance, [{reply, From, Reply}]};

open({call, From}, {charge, N}, Balance) ->
	{NewBalance, Reply}=
	case {N>=0, N=<Balance} of
		{true, true} -> {Balance-N, N};
		_ -> {Balance, 0}
	end,
	{next_state, open, NewBalance, [{reply, From, Reply}]};

open({call, From}, {withdraw, N}, Balance) ->
	{NewBalance, Reply}=
	case {N>=0, N=<Balance} of
		{true, true} -> {Balance-N, N};
		{false, _} -> {Balance, 0};
		{_, false} -> {0, Balance}
	end,
	{next_state, open, NewBalance, [{reply, From, Reply}]};

open({call, From}, balance, Balance) ->
	{next_state, open, Balance, [{reply, From, Balance}]};

open({call, From}, close, Balance) ->
	{next_state, closed, 0, [{reply, From, Balance}]};

open(_, _, Balance) ->
	{next_state, open, Balance}.

closed({call, From}, _, Balance) ->
	{next_state, closed, Balance, [{reply, From, {error, account_closed}}]};

closed(_, _, Balance) ->
	{next_state, closed, Balance}.

terminate(_, _, _) -> ok.

code_change(_, StateName, State, _) -> {ok, StateName, State}.

test_version() -> 1.
const HEADER = 'Team                           | MP |  W |  D |  L |  P';

export const tournamentTally = (input) => {
  let tally = {};
  for (let line of input.split('\n').filter((s) => s.length)) {
    let [team1, team2, outcome] = line.split(';');
    update_tally(tally, team1, outcome == 'win', outcome == 'draw', outcome == 'loss');
    update_tally(tally, team2, outcome == 'loss', outcome == 'draw', outcome == 'win');
  }

  tally = Object.entries(tally).sort(([ak, av], [bk, bv]) => (av.P == bv.P) ? (ak > bk) - (ak < bk) : bv.P - av.P);
  return [HEADER, ...tally.map(([team, stats]) => formatTally(team, stats))].join('\n');
};

const update_tally = (tally, team, w, d, l) => {
  let curr = tally[team] ?? {MP: 0, W: 0, D: 0, L: 0, P: 0};
  tally[team] = {MP: curr.MP + 1, W: curr.W + w, D: curr.D + d, L: curr.L + l, P: curr.P + 3 * w + d};
}

const formatTally = (team, s) =>
  [team.padEnd(30), ...['MP', 'W', 'D', 'L', 'P'].map((x) => String(s[x]).padStart(2))].join(' | ');
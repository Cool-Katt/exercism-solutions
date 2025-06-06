defmodule Frequency do
  def frequency(texts, workers) do
    texts 
    |> Task.async_stream(fn x -> 
      x 
      |> String.downcase() 
      |> String.replace(~r/[^[:alpha:]]/u, "") 
      |> String.trim() 
      |> String.split("", trim: true) 
      |> Enum.frequencies()
    end, max_concurrency: workers)
    |> Enum.reduce(%{}, fn {:ok, x}, acc -> 
           Map.keys(x)
            |> Enum.reduce(acc, fn key, acc -> 
              value = Map.get(x, key)
              Map.update(acc, key, value, &(&1 + value))
            end)    
     end)
  end
end
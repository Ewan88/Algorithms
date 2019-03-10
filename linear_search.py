haystack=["Zig","Zag","Wally","Ronald","Bush","Krusty","Charlie","Bush","Bozo"]

for needle in ("Washington","Bush"):
  try:
    print needle,"is at index",haystack.index(needle), 
  except ValueError, value_error:
    print needle,"is not in haystack"

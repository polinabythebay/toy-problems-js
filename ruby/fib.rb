def fib(num)
  if num <= 1
    return 1
  else
    return fib(num-1) + fib(num-2)
  end
end

print fib(5);
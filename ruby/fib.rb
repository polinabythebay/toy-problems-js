
# classic

def fib(num)
  if num <= 1
    return 1
  else
    return fib(num-1) + fib(num-2)
  end
end

## Another way

def fib(n)
  return n if n < 2
 
  fib(n-1) + fib(n-2)
end

# iterative

def nFib(n)
  x, y, sum = 0, 1, 1
  for i in 2..n
    sum = x + y
    x = y
    y = sum
  end
  n === 0 ? 0 : sum
end

def nthFib(n)
  fib = [0,1]
  for i in 2..n
    fib[i] = fib[i-1] + fib[i-2]
  end
  fib[n]
end

### More Recursive
# without memoization, this approach was loosely bounded by O(2^n)
# with memoization below, we reduce it to linear O(n)
def fib(n)
  n < 2 ? n : fib(n-1) + fib(n-2)
end

def memoize(fn)
  cache = {}
  
  # Since a class inherits directly from its singleton class, 
  # this is where we want to add class methods dynamically 
  # when metaprogramming.
  fxn = singleton_class.instance_method(fn)
  
  define_singleton_method fn do |*args|
    unless cache.include?(args)
      cache[args] = fxn.bind(self).call(*args)
    end
    cache[args]
  end
end

memoize :fib
fib(8)

### Simpler one with memoization
@cache = [0,1]

def fib(n)
  return @cache[n] if @cache[n]
 
  @cache[n] = fib(n-1) + fib(n-2)
end

### another iterative one
def fibIter(n)
  memo = []
 
  (0..n).each do |i|
    memo[i] = i < 2 ? i : memo[i-1] + memo[i-2]
  end
  memo[n]
end
















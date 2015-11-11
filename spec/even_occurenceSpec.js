describe('first even occurence', function() {

  it('should return null if there are no even occurences', function() {
    var array = [1, 3, 3, 3, 2, 4, 4, 2, 5, 2, 4];
    var result = evenOccurence(array);
    expect(result).to.equal(null);
  });

  it('should return the first occurence in an array of numbers', function() {
    var array = [1, 3, 3, 3, 2, 4, 4, 2, 5];
    var result = evenOccurence(array);
    expect(result).to.equal(2);
  });

  it('should return the first occurence in an array of strings', function() {
    var array = ["cat", "dog", "dig", "cat"];
    var result = evenOccurence(array);
    expect(result).to.equal("cat");
  });
});
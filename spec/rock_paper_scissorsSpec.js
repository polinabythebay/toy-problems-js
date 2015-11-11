describe('rock paper scissors', function() {

  it('should return an empty array for 0 plays', function() {
    var result = rockPaperPermutation(0);
    expect(result.length).to.equal(0);
  });

  it('should return the base array for 1 play', function() {
    var base = ['r','p','s'];
    var result = rockPaperPermutation(1);
    expect(result.length).to.equal(base.length);
  });

  it('should return the correct permutation after 2 plays', function() {
    var permutation = [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ];
    var result = rockPaperPermutation(2);
    expect(result.length).to.equal(permutation.length);
  });
});
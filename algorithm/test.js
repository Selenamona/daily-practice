var canJump = function (nums) {
  let maxJump = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < maxJump) {
      nums[i] + i > maxJump && (maxJump = nums[i] + i);
      if (maxJump >= nums.length - 1) {
        return true;
      }
    }
  }
  return false;
};

console.log(canJump([3, 2, 1, 0, 4]));

// rotate([7, 1, 5, 3, 6, 4]);

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsLength = nums.length;

        if (numsLength === 2) {
            return [0, 1];
        }

        for (let i = 0; i <= numsLength; i++) {
            for (let j = i + 1; j < numsLength; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j]
                }
            }
        }
    }
}

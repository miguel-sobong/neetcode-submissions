class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const uniqueNums = {};
        for(let i = 0; i <= nums.length; i++) {
            if(uniqueNums[nums[i]]) {
                return true
            }
            uniqueNums[nums[i]] = true;
        }
        return false;
    }
}

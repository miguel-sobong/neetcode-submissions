class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map();
        for(let i = 0; i <= nums.length; i++) {
            const value = nums[i];
            if(map.get(value)) {
                return true
            }
            map.set(nums[i], true);
        }
        return false;
    }
}

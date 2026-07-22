class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let words = [];
        for (let i of s) {
            if (i >= '0' && i <= '9') {
                words.push(i);
            } else if (i >= 'A' && i <= 'Z') {
                words.push(i.toLocaleLowerCase())
            } else if (i >= 'a' && i <= 'z') {
                words.push(i);
            }
        }

        return words.join("") === words.reverse().join("");
    }
}

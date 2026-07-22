class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let words = [];
        for (let i of s) {
            const charCode = i.charCodeAt(0);

            if (charCode > 47 && charCode < 58) {
                words.push(i);
            }

            if (charCode > 64 && charCode < 91) {
                words.push(i.toLocaleLowerCase())
            }

            if (charCode > 96 && charCode < 123) {
                words.push(i.toLocaleLowerCase());
            }
        }

        return words.join("") === words.reverse().join("");
    }
}

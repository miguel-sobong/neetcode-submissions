class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if(strs.length === 1) {
            return [strs]
        }

        const anagramMap: Map<string, string[]> = new Map();

        for(let i = 0; i < strs.length; i++) {
            const value = strs[i].split('').sort().join('');
            
            if(anagramMap.has(value)) {
                const newValue = anagramMap.get(value);
                newValue.push(strs[i]);
                anagramMap.set(value, newValue);
            } else {
                anagramMap.set(value, [strs[i]]);
            }
        }

        return [...anagramMap.values()];
    }
}

const maxSubarraySum = (arr, n) => {
    // Find the max sum of a subarray with the length of the number passed to the function. subarray must consist of consecutive elements from the array.
    // TC O(n) SC O(1)
    // return maxSum
    if (arr.length === 0) {
        return null
    }
    let maxSum = 0
    let tempSum = 0
    for (let i = 0; i < n; i++) {
        tempSum += arr[i]
    }
    maxSum = tempSum
    for (let j = 1; j <= arr.length - n; j++) {
        tempSum = tempSum - arr[j - 1] + arr[j + n - 1]
        if (tempSum > maxSum) {
            maxSum = tempSum
        }
    }
    return maxSum
}

const result = maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 3)

// SOLUTION
// function maxSubarraySum(arr, num) {
//     if (arr.length < num) return null;

//     let total = 0;
//     for (let i = 0; i < num; i++) {
//         total += arr[i];
//     }
//     let currentTotal = total;
//     for (let i = num; i < arr.length; i++) {
//         currentTotal += arr[i] - arr[i - num];
//         total = Math.max(total, currentTotal);
//     }
//     return total;
// }

// SOLUTION
// function minSubArrayLen(nums, sum) {
//     let total = 0;
//     let start = 0;
//     let end = 0;
//     let minLen = Infinity;

//     while (start < nums.length) {
//         // if current window doesn't add up to the given sum then 
//         // move the window to right
//         if (total < sum && end < nums.length) {
//             total += nums[end];
//             end++;
//         }
//         // if current window adds up to at least the sum given then
//         // we can shrink the window 
//         else if (total >= sum) {
//             minLen = Math.min(minLen, end - start);
//             total -= nums[start];
//             start++;
//         }
//         // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
//         else {
//             break;
//         }
//     }

//     return minLen === Infinity ? 0 : minLen;
// }

const minSubArrayLen = (arr, n) => {
    // Return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
    // TC O(n) SC O(1)
    // return minLength or 0
    let minLength = 0
    let tempLength = 0
    let tempSum = 0
    for (let i = 0; i < arr.length; i++) {
        tempLength++
        if (arr[i] >= n) {
            minLength = tempLength
            tempLength = 0
        } else {
            tempSum += arr[i]
            if (tempSum >= n) {
                minLength = tempLength
                tempLength = 0
            }
        }
    }

}

// const result = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)

// SOLUTION
// function findLongestSubstring(str) {
//     let longest = 0;
//     let seen = {};
//     let start = 0;

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (seen[char]) {
//             start = Math.max(start, seen[char]);
//         }
//         // index - beginning of substring + 1 (to include current in count)
//         longest = Math.max(longest, i - start + 1);
//         // store the index of the next char so as to not double count
//         seen[char] = i + 1;
//     }
//     return longest;
// }

const findLongestSubstring = (str) => {
    // return the length of the longest substring with all distinct (unique) characters
    // TC O(n)
    // return length
}

// findLongestSubstring('thisisawesome')
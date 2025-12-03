
export type AnimationStep = {
  type: 'compare' | 'swap' | 'sorted' | 'overwrite';
  indices: number[];
  values?: number[];
};

export const getAnimations = (algorithm: string, array: number[]): AnimationStep[] => {
    switch (algorithm) {
        case 'bubbleSort':
            return getBubbleSortAnimations(array);
        case 'selectionSort':
            return getSelectionSortAnimations(array);
        case 'insertionSort':
            return getInsertionSortAnimations(array);
        case 'mergeSort':
            return getMergeSortAnimations(array);
        case 'quickSort':
            return getQuickSortAnimations(array);
        case 'heapSort':
            return getHeapSortAnimations(array);
        case 'cocktailSort':
            return getCocktailSortAnimations(array);
        case 'shellSort':
            return getShellSortAnimations(array);
        default:
            return getBubbleSortAnimations(array);
    }
}

const getBubbleSortAnimations = (array: number[]): AnimationStep[] => {
    const animations: AnimationStep[] = [];
    if (array.length <= 1) return animations;
    const auxiliaryArray = array.slice();
    for (let i = 0; i < auxiliaryArray.length - 1; i++) {
        for (let j = 0; j < auxiliaryArray.length - i - 1; j++) {
            animations.push({ type: 'compare', indices: [j, j + 1] });
            if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
                animations.push({
                  type: 'swap',
                  indices: [j, j + 1],
                  values: [auxiliaryArray[j+1], auxiliaryArray[j]]
                });
                [auxiliaryArray[j], auxiliaryArray[j + 1]] = [auxiliaryArray[j + 1], auxiliaryArray[j]];
            }
        }
        animations.push({ type: 'sorted', indices: [auxiliaryArray.length - 1 - i]});
    }
    animations.push({ type: 'sorted', indices: [0]});
    return animations;
};

const getSelectionSortAnimations = (array: number[]): AnimationStep[] => {
    const animations: AnimationStep[] = [];
    const arr = array.slice();
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            animations.push({ type: 'compare', indices: [minIdx, j] });
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        animations.push({ type: 'swap', indices: [i, minIdx], values: [arr[minIdx], arr[i]] });
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        animations.push({ type: 'sorted', indices: [i] });
    }
    animations.push({ type: 'sorted', indices: [n-1] });
    return animations;
};

const getInsertionSortAnimations = (array: number[]): AnimationStep[] => {
    const animations: AnimationStep[] = [];
    const arr = array.slice();
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        animations.push({ type: 'compare', indices: [i, j] });
        while (j >= 0 && arr[j] > key) {
            animations.push({ type: 'overwrite', indices: [j+1], values: [arr[j]] });
            arr[j + 1] = arr[j];
            j = j - 1;
            if (j >= 0) animations.push({ type: 'compare', indices: [i, j] });
        }
        animations.push({ type: 'overwrite', indices: [j+1], values: [key] });
        arr[j + 1] = key;
    }
    for (let i=0; i<n; i++) animations.push({ type: 'sorted', indices: [i] });
    return animations;
};

const getMergeSortAnimations = (array: number[]): AnimationStep[] => {
    const animations: AnimationStep[] = [];
    if (array.length <= 1) return animations;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    for(let i=0; i<array.length; i++) animations.push({ type: 'sorted', indices: [i] });
    return animations;
};

function mergeSortHelper(mainArray: number[], startIdx: number, endIdx: number, auxiliaryArray: number[], animations: AnimationStep[]) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray: number[], startIdx: number, middleIdx: number, endIdx: number, auxiliaryArray: number[], animations: AnimationStep[]) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animations.push({ type: 'compare', indices: [i, j] });
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push({ type: 'overwrite', indices: [k], values: [auxiliaryArray[i]] });
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push({ type: 'overwrite', indices: [k], values: [auxiliaryArray[j]] });
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        animations.push({ type: 'overwrite', indices: [k], values: [auxiliaryArray[i]] });
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push({ type: 'overwrite', indices: [k], values: [auxiliaryArray[j]] });
        mainArray[k++] = auxiliaryArray[j++];
    }
}


const getQuickSortAnimations = (array: number[]): AnimationStep[] => {
    const animations: AnimationStep[] = [];
    const arr = array.slice();
    quickSortHelper(arr, 0, arr.length - 1, animations);
    for(let i=0; i<arr.length; i++) animations.push({ type: 'sorted', indices: [i] });
    return animations;
};

function quickSortHelper(array: number[], low: number, high: number, animations: AnimationStep[]) {
    if (low < high) {
        const pi = partition(array, low, high, animations);
        quickSortHelper(array, low, pi - 1, animations);
        quickSortHelper(array, pi + 1, high, animations);
    } else if (low >= high && low < array.length) {
        animations.push({ type: 'sorted', indices: [low] });
    }
}

function partition(array: number[], low: number, high: number, animations: AnimationStep[]) {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        animations.push({ type: 'compare', indices: [j, high] });
        if (array[j] < pivot) {
            i++;
            animations.push({ type: 'swap', indices: [i, j], values: [array[j], array[i]] });
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    animations.push({ type: 'swap', indices: [i + 1, high], values: [array[high], array[i + 1]] });
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    animations.push({ type: 'sorted', indices: [i+1] });
    return i + 1;
}

const getHeapSortAnimations = (array: number[]): AnimationStep[] => {
    const animations: AnimationStep[] = [];
    const arr = array.slice();
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i, animations);
    }
    for (let i = n - 1; i > 0; i--) {
        animations.push({ type: 'swap', indices: [0, i], values: [arr[i], arr[0]] });
        [arr[0], arr[i]] = [arr[i], arr[0]];
        animations.push({ type: 'sorted', indices: [i] });
        heapify(arr, i, 0, animations);
    }
    animations.push({ type: 'sorted', indices: [0] });
    return animations;
};

function heapify(array: number[], n: number, i: number, animations: AnimationStep[]) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n) animations.push({ type: 'compare', indices: [largest, left] });
    if (left < n && array[left] > array[largest]) {
        largest = left;
    }
    if (right < n) animations.push({ type: 'compare', indices: [largest, right] });
    if (right < n && array[right] > array[largest]) {
        largest = right;
    }
    if (largest !== i) {
        animations.push({ type: 'swap', indices: [i, largest], values: [array[largest], array[i]] });
        [array[i], array[largest]] = [array[largest], array[i]];
        heapify(array, n, largest, animations);
    }
}

const getCocktailSortAnimations = (array: number[]): AnimationStep[] => {
    const animations: AnimationStep[] = [];
    const arr = array.slice();
    let swapped = true;
    let start = 0;
    let end = arr.length;

    while (swapped) {
        swapped = false;
        for (let i = start; i < end - 1; ++i) {
            animations.push({ type: 'compare', indices: [i, i + 1] });
            if (arr[i] > arr[i + 1]) {
                animations.push({ type: 'swap', indices: [i, i+1], values: [arr[i+1], arr[i]] });
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        if (!swapped) break;
        swapped = false;
        animations.push({ type: 'sorted', indices: [end-1]});
        end = end - 1;
        for (let i = end - 1; i >= start; i--) {
            animations.push({ type: 'compare', indices: [i, i + 1] });
            if (arr[i] > arr[i + 1]) {
                animations.push({ type: 'swap', indices: [i, i+1], values: [arr[i+1], arr[i]] });
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        animations.push({ type: 'sorted', indices: [start]});
        start = start + 1;
    }
    for(let i=start; i<end; i++) animations.push({ type: 'sorted', indices: [i] });
    return animations;
};

const getShellSortAnimations = (array: number[]): AnimationStep[] => {
    const animations: AnimationStep[] = [];
    const arr = array.slice();
    const n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i += 1) {
            const temp = arr[i];
            let j;
            animations.push({ type: 'compare', indices: [i, i-gap] });
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                animations.push({ type: 'compare', indices: [j, j-gap] });
                animations.push({ type: 'overwrite', indices: [j], values: [arr[j - gap]] });
                arr[j] = arr[j - gap];
            }
            animations.push({ type: 'overwrite', indices: [j], values: [temp] });
            arr[j] = temp;
        }
    }
    for(let i=0; i<n; i++) animations.push({ type: 'sorted', indices: [i] });
    return animations;
};

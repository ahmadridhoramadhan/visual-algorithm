import LibSortInterface from "../interface/sortFunction";

export const radixSort : LibSortInterface = async (arr, setArr, setCurrent, setCurrent2) => {
    // Cari nilai maksimum pada array
    const max = Math.max(...arr);

    // Looping berdasarkan digit dari nilai maksimum
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        // Inisialisasi array yang akan diisi kembali pada setiap iterasi
        let output = new Array(arr.length).fill(0);

        // Inisialisasi array counter
        let count = new Array(10).fill(0);

        // Menghitung kemunculan setiap digit
        for (let i = 0; i < arr.length; i++) {
            let digit = Math.floor((arr[i] / exp) % 10);
            count[digit]++;
        }

        // Menjumlahkan setiap counter untuk mendapatkan posisi akhir setiap digit
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        // Menempatkan setiap elemen pada array output berdasarkan digitnya
        for (let i = arr.length - 1; i >= 0; i--) {
            let digit = Math.floor((arr[i] / exp) % 10);
            output[count[digit] - 1] = arr[i];
            count[digit]--;
            setCurrent(output[i]);
        }

        // Setiap iterasi, array arr akan diisi kembali dengan array output
        for (let i = 0; i < arr.length; i++) {
            arr[i] = output[i];
            setArr([...arr]); // setiap kali ada perubahan, panggil setArr untuk memperbarui tampilan
            setCurrent2(arr[i]);
            await new Promise((resolve) => setTimeout(resolve, 100)); // memberi jeda agar proses sorting bisa dilihat dengan jelas
        }
    }
};
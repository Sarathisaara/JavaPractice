public class ReverseArray {
    public static void main(String[] args) {
        int[] arr = { 10, 20, 30, 40, 50, 60 };
        int i = 0, j = arr.length - 1;
        System.out.println("before reverse: ");
        for (int k = 0; k < arr.length; k++) {
            System.out.print(arr[k] + " ");
        }
        while (i < j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
        System.out.println();
        System.out.println("after reverse: ");
        for (int k = 0; k < arr.length; k++) {
            System.out.print(arr[k] + " ");
        }
    }
}

public class X {
    public static void main(String[] args) {
        int n = 10;
        for (int i = 0; i < n; i++) {
            /*
             * if (i == n / 2) {
             * for (int l = 0; l <= n - i - 2; l++) {
             * System.out.print(" ");
             * }
             * for (int k = n - i; k <= n + i; k++) {
             * System.out.print("*");
             * }
             * } else {
             */

            for (int j = 0; j <= n * 2; j++) {
                if (j == n - i - 1 || j == (n + i) - 1 || (i == n / 2 && j >= n - i && j <= n + i - 1)) {
                    System.out.print("*");

                } else
                    System.out.print(" ");
            }
            // }

            System.out.println();
        }
    }
}

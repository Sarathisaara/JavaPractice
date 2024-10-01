
public class P {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 0; i <= n / 2; i++) {
            for (int j = n - i + i; j >= 1; j--) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

}

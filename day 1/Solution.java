import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        int rows = 5;
        if (rows == 3) {
            System.out.println(" *");
            System.out.println("***");
        } else {
            for (int i = 1; i <= rows; i++) {
                for (int j = 1; j <= rows - i; j++) {
                    System.out.print(" ");
                }
                for (int j = 1; j <= 2 * i - 1; j++) {
                    System.out.print("*");
                }
                System.out.println();
            }
            for (int i = rows - 1; i >= 1; i--) {
                for (int j = 1; j <= rows - i; j++) {
                    System.out.print(" ");
                }
                for (int j = 1; j <= 2 * i - 1; j++) {
                    System.out.print("*");
                }
                System.out.println();
            }
        }
    }
}
/* SIMPLE CALCULATOR

When I run the application, I'm prompted for a numeric value. I'll type a numeric value in and press enter or return, then I'm prompted for a second numeric value and I will type a value in and press enter or return again, and the two values are added together.
To accept input, you'll need to use the scanner class with its next line method. You'll need to accept two values and save them as string variables, then you'll need to add the two values together and display the result.
After you've finished your version of the application, watch the next video for my solution to this challenge.

*/

package com.example.java;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a numeric value: ");
        double firstValue = scanner.nextDouble();

        System.out.print("Enter a numeric value: ");
        double secondValue = scanner.nextDouble();

        System.out.printf("The answer is ");
        System.out.println(firstValue + secondValue);
    }
}

/* SIMPLE CALCULATOR

When I run the application, I'm prompted for a numeric value. I'll type a numeric value in and press enter or return, then I'm prompted for a second numeric value and I will type a value in and press enter or return again, and the two values are added together.
To accept input, you'll need to use the scanner class with its next line method. You'll need to accept two values and save them as string variables, then you'll need to add the two values together and display the result.
After you've finished your version of the application, watch the next video for my solution to this challenge.

*/

package com.example.java;

import java.util.Scanner;

public class Main {

    private static String[] months = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};

    public static void main(String[] args) {

        Scanner getInput = new Scanner(System.in);
        while (true) {
            System.out.print("Enter a month: ");
            String monthName = getInput.nextLine();
            if (monthName.length() == 0) {
                break;
            }
            int monthNumber = getMonthNumber(monthName);
            if (monthNumber == -1) {
                System.out.println("Month not found.");
            } else {
                System.out.println(String.format(
                        "%s is month number %d", monthName, monthNumber
                ));

            }
        }

    }

    private static void simpleCalculator() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a numeric value: ");
        double firstValue = scanner.nextDouble();

        System.out.print("Enter a numeric value: ");
        double secondValue = scanner.nextDouble();

        System.out.printf("The answer is ");
        System.out.println(firstValue + secondValue);
    }

    private static void loopOverMonths() {
        for (int i = 0; i < months.length; i++) {
            System.out.println(months[i]);
        }
    }

    private static int getMonthNumber(String monthName) {
        for (int i = 0; i < months.length; i++) {
            if (monthName.equalsIgnoreCase(months[i])) {
                return i + 1;
            }
        }
        return -1;
    }
}

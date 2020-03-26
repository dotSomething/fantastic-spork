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

        simpleCalculator();

    }

    private static void findMonthNumber() {
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

    private static double addValues(String value1, String value2) {
        return Double.parseDouble(value1) + Double.parseDouble(value2);
    }

    private static double subtractValues(String value1, String value2) {
        return Double.parseDouble(value1) - Double.parseDouble(value2);
    }

    private static double multiplyValues(String value1, String value2) {
        return Double.parseDouble(value1) * Double.parseDouble(value2);
    }

    private static double divideValues(String value1, String value2) {
        return Double.parseDouble(value1) / Double.parseDouble(value2);
    }

    private static String getInput(String prompt) {
        System.out.println(prompt);
        Scanner scanner = new Scanner(System.in);
        return scanner.nextLine();
    }

    private static void simpleCalculator() {
        Scanner scanner = new Scanner(System.in);
        String prefix = "The answer is ";
        String firstValue = getInput("Enter the first value: ");
        String secondValue = getInput("Enter the second value: ");
        String operation = getInput("Choose an operation: ");

        switch (operation) {
            case "+":
                System.out.printf(prefix + addValues(firstValue, secondValue));
                break;
            case "-":
                System.out.printf(prefix + subtractValues(firstValue, secondValue));
                break;
            case "*":
                System.out.printf(prefix + multiplyValues(firstValue, secondValue));
                break;
            case "/":
                System.out.printf(prefix + divideValues(firstValue, secondValue));
                break;
            default:
                System.out.printf("Unknown operator");
                return;
        }

        System.out.println();
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

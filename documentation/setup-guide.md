# Setup Guide

This guide explains how to set up and use the Google Sheets Automation Toolkit.

## 1. Prerequisites

Before using the toolkit, make sure you have:

- Access to the required Google Sheet
- Permission to edit the Google Sheet
- Access to Google Apps Script
- The required booking sheet structure
- Valid airport and pickup/drop-off location information

## 2. Set Up Google Apps Script

1. Open the Google Sheet.
2. Navigate to **Extensions → Apps Script**.
3. Open the `apps-script/AIRPORT_DISTANCE.gs` file in this repository.
4. Copy the Apps Script function.
5. Paste the function into the Apps Script editor.
6. Save the project.

## 3. Authorize Required Services

When Google requests authorization, review the permissions and authorize the required services.

The airport distance function uses Google Maps Directions through Google Apps Script.

## 4. Use the Distance Function

The function calculates the driving distance and duration between an airport and a pickup or drop-off location.

### GAT Formula

```excel
=AIRPORT_DISTANCE(O2,R2,S2)
```

### KSA Formula

```excel
=AIRPORT_DISTANCE(N2,Q2,R2)
```

## 5. Add Validation Formulas

Select the appropriate formula based on the booking type:

- GAT formulas for GAT bookings
- KSA formulas for KSA bookings
- KSA driver formulas for the driver sheet

Before applying a formula, confirm that the spreadsheet columns match the documented column mapping.

## 6. Review the Results

Review the formula output for errors or validation warnings.

Examples include:

- `OK`
- `Invalid Mobile`
- `Missing Flight No`
- `Airport mismatch`
- `Missing Flight/Pickup Time`
- `More than 45 KM`

## 7. Troubleshooting

If a formula does not work:

1. Check the input values.
2. Confirm the column references.
3. Verify the travel type.
4. Check the airport and location names.
5. Review any Apps Script authorization prompts.
6. Refer to the troubleshooting documentation.
7. Better to change the date and time into plain text format

# Google Sheets Automation Toolkit

A reusable toolkit for Google Sheets and Google Apps Script automation.

This repository contains formulas, Apps Script functions, and validation logic designed to support transportation booking operations.

## Project Overview

The toolkit helps teams perform common booking checks and calculations directly in Google Sheets.

It currently includes:

- Airport-to-location driving distance calculation
- Distance validation against a 45 KM 
- Booking sanity checks
- Flight and pickup time validation
- Mobile number validation
- Flight number validation
- Airport validation for KSA bookings
- Arrival and departure time validation

## Repository Structure

- `apps-script/` - Reusable Google Apps Script functions
- `formulas/GAT/` - GAT-related Google Sheets formulas
- `formulas/KSA/` - KSA-related Google Sheets formulas
- `README.md` - Project overview and usage instructions

## Key Features

### 1. Airport Distance Calculation

Uses Google Apps Script and Google Maps Directions to calculate the driving distance and estimated travel duration between an airport and a pickup or drop-off location.

Example output:

18.7 KM | 25 mins

### 2. Distance Validation

Checks whether the calculated driving distance exceeds the defined threshold of 45 KM.

Possible results:

- `OK`
- `More than 45 KM`
- `Invalid Distance`

### 3. Booking Sanity Checks

Validates important booking information, including:

- Mobile number
- Flight number
- Airport
- Travel type
- Flight date
- Pickup date
- Flight time
- Pickup time

### 4. GAT and KSA Support

Provides separate formulas for:

- GAT booking validation
- KSA booking validation
- KSA driver-sheet validation

### 5. Reusable Automation

The formulas and Apps Script functions are organized so they can be reused across different Google Sheets and operational workflows.

## Usage

### Google Apps Script

1. Open the Google Sheet.
2. Go to **Extensions → Apps Script**.
3. Copy the required function from the `apps-script/` folder.
4. Save the Apps Script project.
5. Use the custom function in the Google Sheet.

Example:

```excel
=AIRPORT_DISTANCE(O2,R2,S2)
```
The function returns the estimated driving distance and duration.

## Google Sheets Formulas

Copy the required formula from the appropriate folder:

formulas/GAT/ for GAT bookings
formulas/KSA/ for KSA bookings

Before using a formula, verify that the spreadsheet columns match the expected column mapping.

## Validation Results

Validation formulas may return results such as:

OK
Invalid Mobile
Missing Flight No
Airport mismatch
Missing Flight/Pickup Time
More than 45 KM

Review the validation result before approving or processing the booking.

## Installation and Setup

### Step 1: Open the Google Sheet

Open the Google Sheet where the booking validation or distance calculation is required.

### Step 2: Open Apps Script

Navigate to:

Extensions → Apps Script

### Step 3: Add the Apps Script Function

1. Open the `apps-script/` folder in this repository.
2. Open `AIRPORT_DISTANCE.gs`.
3. Copy the function code.
4. Paste it into the Google Apps Script editor.
5. Click **Save**.

### Step 4: Authorize Google Services

When prompted, review and authorize the required Google services.
The distance calculation uses Google Maps Directions through Google Apps Script.

### Step 5: Use the Function

Use the appropriate formula based on the spreadsheet column structure.

## Detailed Project Structure

```text
google-sheets-automation-toolkit/
│
├── README.md
│
├── apps-script/
│   └── AIRPORT_DISTANCE.gs
│
├── formulas/
│   ├── GAT/
│   │   ├── airport-distance.md
│   │   ├── distance-validation.md
│   │   └── full-sanity.md
│   │
│   └── KSA/
│       ├── airport-distance.md
│       ├── distance-validation.md
│       ├── full-sanity.md
│       └── driver-sanity.md
│
├── documentation/
│   ├── setup-guide.md
│   ├── column-mapping.md
│   ├── validation-rules.md
│   └── troubleshooting.md
│
└── examples/
    └── sample-data.md

# Validation Rules

This document describes the validation rules used by the Google Sheets Automation Toolkit.

## 1. Mobile Number Validation

The mobile number is checked to confirm that it meets the minimum required length.

### Validation

- A mobile number with fewer than 9 characters is considered invalid.
- A mobile number with 9 or more characters passes the length check.

### Possible Result

```text
Invalid Mobile
```

> Note: This check validates the length of the value. It does not independently confirm whether the number is active or belongs to the passenger.

---

## 2. Flight Number Validation

The flight number is checked to ensure that it is not blank.

### Validation

- If the flight number is missing, the booking is flagged.
- If the flight number is present, the missing-value check passes.

### Possible Result

```text
Missing Flight No
```

---

## 3. Airport Validation

Airport validation is used for KSA bookings.

The airport is checked against the region:

| Region | Expected Airport Identifier |
|---|---|
| RUH | Khaled |
| DMM | Fahd |
| JED | Abdulaziz |

### Validation

- The region and airport values must be available.
- The airport value is checked against the expected airport identifier.
- A mismatch generates a validation warning.

### Possible Result

```text
Airport mismatch
```

> Ensure that the airport name contains the expected identifier before applying the validation formula.

---

## 4. Travel Type Validation

The travel type determines how the booking timing is checked.

Supported travel types:

- `Arrival`
- `Departure`

The travel type should be entered consistently in the sheet.

---

## 5. Flight and Pickup Time Validation

The flight time and pickup time are checked to ensure that required values are available.

### Validation

The following values are checked:

- Flight time
- Pickup time
- Flight date
- Pickup date

Blank values or placeholder values such as `-` may trigger a validation warning.

### Possible Result

```text
Missing Flight/Pickup Time
```

---

## 6. Departure Time Validation

For departure bookings, the difference between the pickup time and flight time is checked.

### Allowed Time Range

- Minimum: 1 hour before the flight
- Maximum: 6 hours before the flight

### Validation Results

| Condition | Result |
|---|---|
| Less than 1 hour before flight | `Departure <1 hr` |
| More than 6 hours before flight | `Departure >6 hrs` |
| Between 1 and 6 hours | Valid departure timing |

---

## 7. Arrival Time Validation

For arrival bookings, the pickup date and time are compared with the flight date and time.

### Validation

- The pickup date should match the flight date.
- Pickup time should not be earlier than the flight time.
- Pickup time should not be more than 1 hour after the flight time.

### Possible Results

```text
Arrival date mismatch
Arrival before flight
Arrival >1 hr after flight
```

---

## 8. Distance Validation

The airport distance function calculates the driving distance between the airport and the pickup or drop-off location.

The distance is checked against a threshold of 45 KM.

### Validation Results

| Condition | Result |
|---|---|
| Distance is 45 KM or less | `OK` |
| Distance is greater than 45 KM | `More than 45 KM` |
| Distance value cannot be read | `Invalid Distance` |

### Example

```text
18.7 KM | 25 mins
```

The distance value is extracted from the result and compared with the threshold.

---

## 9. Overall Sanity Result

The booking sanity formulas combine multiple validation checks.

A booking may return:

```text
OK
```

when the required checks pass.

If one or more checks fail, the formula may return one or more validation messages separated by:

```text
 |
```

Review all displayed messages before processing the booking.

---

## Important Notes

- Verify the correct column mapping before applying formulas.
- Confirm that date and time values use the expected format.
- Review validation warnings instead of ignoring them.
- Update this document when validation rules change.
- The validation formulas should be tested after any change to the spreadsheet structure.

# Troubleshooting Guide

This guide explains common issues that may occur while using the Google Sheets Automation Toolkit.

## 1. Distance Function Returns a Blank Result

### Possible Causes

- Travel type is blank.
- Airport value is blank.
- Pickup or drop-off location is blank.
- A placeholder value is being used.
- Required input cells are incomplete.

### Troubleshooting Steps

1. Check the travel type.
2. Confirm that the airport value is available.
3. Confirm that the pickup or drop-off location is available.
4. Remove unnecessary spaces from the input values.
5. Verify that the formula references the correct columns.

---

## 2. Invalid Travel Type

### Possible Cause

The travel type is not recognized by the Apps Script function.

### Supported Values

```text
Arrival
Departure
```

### Troubleshooting Steps

1. Open the travel type cell.
2. Check the spelling.
3. Confirm that the value is either `Arrival` or `Departure`.
4. Remove unnecessary spaces.
5. Recalculate the formula.

### Possible Result

```text
Invalid Travel Type
```

---

## 3. Route Not Found

### Possible Causes

- Airport name is incorrect.
- Pickup or drop-off location is unclear.
- Location information is incomplete.
- Google Maps cannot find a route between the locations.

### Troubleshooting Steps

1. Verify the airport name.
2. Check the pickup or drop-off address.
3. Use a more specific location.
4. Confirm that both locations are valid.
5. Try the route directly in Google Maps.

### Possible Result

```text
Route Not Found
```

---

## 4. Distance Error

### Possible Causes

- Apps Script authorization is incomplete.
- The Maps service encounters an error.
- The input values are invalid.
- A service or usage limitation is reached.

### Troubleshooting Steps

1. Open the Google Apps Script editor.
2. Review any authorization prompts.
3. Check the Apps Script execution history.
4. Verify the input values.
5. Try the function again after correcting the issue.

### Possible Result

```text
Distance Error
```

---

## 5. Invalid Distance

### Possible Causes

- The distance output does not contain the expected format.
- The distance value is missing.
- The validation formula references the wrong cell.
- The output format has changed.

### Troubleshooting Steps

1. Check the distance formula output.
2. Confirm that the output contains a distance in KM.
3. Verify the validation formula reference.
4. Check that the distance output follows the expected format.

### Possible Result

```text
Invalid Distance
```

---

## 6. Missing Flight or Pickup Time

### Possible Causes

- Flight time is blank.
- Pickup time is blank.
- A placeholder such as `-` is used.
- The date or time is stored in an unexpected format.

### Troubleshooting Steps

1. Check the flight date.
2. Check the pickup date.
3. Check the flight time.
4. Check the pickup time.
5. Confirm that the date and time values use the expected format.
6. If necessary, convert the date and time values into plain text format and verify them before applying the formula.

### Possible Result

```text
Missing Flight/Pickup Time
```

---

## 7. Date and Time Validation Error

### Possible Causes

- Date values are stored in an unexpected format.
- Time values are stored as text instead of time values.
- The flight date and pickup date are incorrect.
- The date or time contains unnecessary spaces.
- The formula references the wrong columns.

### Troubleshooting Steps

1. Check the date and time values.
2. Confirm the expected date format.
3. Confirm the expected time format.
4. Verify the flight and pickup columns.
5. Check whether the values are stored as dates, times, or plain text.
6. Review the formula error message.

---

## 8. Airport Mismatch

### Possible Causes

- The region is incorrect.
- The airport value does not match the expected airport identifier.
- The airport name is incomplete.
- The wrong column is referenced.

### Troubleshooting Steps

1. Check the region.
2. Check the airport name.
3. Confirm the expected airport identifier.
4. Verify the airport column reference.
5. Correct the airport or region value.

### Possible Result

```text
Airport mismatch
```

---

## 9. Formula Returns an Unexpected Result

### Troubleshooting Steps

1. Confirm that the correct formula is being used.
2. Verify the spreadsheet column mapping.
3. Check all required input cells.
4. Confirm the travel type.
5. Check the date and time values.
6. Review the formula for incorrect cell references.
7. Test the formula using a known sample row.

---

## 10. Before Escalating an Issue

Before reporting an issue to the team:

- Confirm the spreadsheet name.
- Identify the affected row.
- Record the formula being used.
- Note the exact error message.
- Check the input values.
- Confirm whether the issue affects one row or multiple rows.
- Include a screenshot when appropriate.

Do not share confidential passenger information unnecessarily.

---

## Important Notes

- Verify the column mapping before changing formulas.
- Test formula changes on sample data before using them on live bookings.
- Keep the troubleshooting guide updated when new issues are identified.
- Do not modify Apps Script code without reviewing the impact on existing sheets.

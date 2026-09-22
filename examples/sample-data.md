# Sample Data

This document contains sample booking data for testing the Google Sheets Automation Toolkit.

> Important: The examples in this document are fictional and should not be treated as real passenger or booking information.

## 1. Purpose

Sample data can be used to:

- Test Google Sheets formulas.
- Verify column references.
- Test distance validation.
- Review booking sanity checks.
- Demonstrate expected validation results.
- Train new team members.

---

## 2. GAT Sample Data

The following is an illustrative GAT booking record.

| Field | Sample Value |
|---|---|
| Bank Name | ANBC |
| Request ID | ANBC-1001 |
| Contact | 501234567 |
| Flight No | XY123 |
| Flight Date | 15/09/2026 |
| Pickup Date | 15/09/2026 |
| Flight Time | 18:00 |
| Pickup Time | 15:00 |
| Travel Type | Departure |
| Region | International |
| Airport | Sample International Airport |
| Pickup/Drop-off Location | Sample Hotel |
| Status | Confirmed |

### GAT Distance Formula

```excel
=AIRPORT_DISTANCE(O2,R2,S2)
```

### GAT Distance Validation

Distance input:

```text
AB2
```

Validation output:

```text
AC2
```

Distance threshold:

```text
45 KM
```

---

## 3. KSA Sample Data

The following is an illustrative KSA booking record.

| Field | Sample Value |
|---|---|
| Request ID | KSA-1001 |
| Contact | 501234567 |
| Flight No | XY456 |
| Flight Date | 15/09/2026 |
| Pickup Date | 15/09/2026 |
| Flight Time | 18:00 |
| Pickup Time | 15:00 |
| Travel Type | Departure |
| Region | RUH |
| Airport | King Khalid International Airport |
| Location | Sample Hotel |
| Car Type | Sedan |
| Status | Confirmed |

### KSA Distance Formula

```excel
=AIRPORT_DISTANCE(N2,Q2,R2)
```

### KSA Distance Validation

Distance input:

```text
AA2
```

Validation output:

```text
AB2
```

Distance threshold:

```text
45 KM
```

---

## 4. Sample Distance Results

The distance function may return results in the following format:

```text
18.7 KM | 25 mins
```

This is an illustrative output format and does not represent a verified route calculation.

### Distance Validation Examples

| Distance | Expected Result |
|---|---|
| 18.7 KM | OK |
| 45.0 KM | OK |
| 52.3 KM | More than 45 KM |
| Blank or invalid output | Invalid Distance |

---

## 5. Sample Sanity Check Results

| Scenario | Expected Result |
|---|---|
| All required checks pass | OK |
| Mobile number is too short | Invalid Mobile |
| Flight number is blank | Missing Flight No |
| Airport does not match region | Airport mismatch |
| Flight or pickup time is missing | Missing Flight/Pickup Time |
| Departure is less than 1 hour before flight | Departure <1 hr |
| Departure is more than 6 hours before flight | Departure >6 hrs |
| Arrival date differs from flight date | Arrival date mismatch |

---

## 6. Testing Guidelines

Before testing:

1. Use sample or fictional data.
2. Confirm the spreadsheet column mapping.
3. Verify the travel type.
4. Check date and time formats.
5. Confirm that the formula references the correct cells.
6. Review the result against the expected validation behavior.

Do not use confidential passenger information in public examples or documentation.

---

## 7. Important Notes

- Sample data is intended for demonstration and testing.
- Actual distance results depend on the route and Google Maps service response.
- Validation results depend on the formula logic and input values.
- Update the examples when the formulas or column structure changes.

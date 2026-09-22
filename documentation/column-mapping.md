# Column Mapping

This document describes the column structure used by the GAT and KSA booking sheets.

## GAT Column Mapping

| Column | Field |
|---|---|
| A | S.No |
| B | Employee Name |
| C | Bank Name |
| D | Service Type |
| E | Request ID |
| F | Contact |
| G | Passenger Name |
| H | Flight No |
| I | Voucher ID |
| J | Booking Date |
| K | Flight Date |
| L | Pickup Date |
| M | Flight Time |
| N | Pickup Time |
| O | Travel Type |
| P | Terminal |
| Q | Region |
| R | Airport |
| S | Pickup/Drop-off Location |
| T | Car Type |
| U | Assigned Car |
| V | Status |
| W | Amount Debited |
| X | No. of Pax |
| Y | Remarks |
| Z | Comments |
| AA | Review by TL |
| AB | Check Distance |
| AC | If Distance >45 |

### GAT Distance Formula

```excel
=AIRPORT_DISTANCE(O2,R2,S2)
```

| Reference | Description |
|---|---|
| O2 | Travel Type |
| R2 | Airport |
| S2 | Pickup/Drop-off Location |

The formula returns the driving distance and estimated duration.

### GAT Distance Validation

| Item | Column |
|---|---|
| Distance input | AB |
| Validation output | AC |
| Distance threshold | 45 KM |

---

## KSA Column Mapping

| Column | Field |
|---|---|
| A | S.No |
| B | Employee Name |
| C | Service Type |
| D | Request ID |
| E | Contact |
| F | Passenger Name |
| G | Flight No |
| H | Voucher ID |
| I | Booking Date |
| J | Flight Date |
| K | Pickup Date |
| L | Flight Time |
| M | Pickup Time |
| N | Travel Type |
| O | Terminal |
| P | Region |
| Q | Airport |
| R | Locations |
| S | Car Type |
| T | Assigned Car |
| U | Status |
| V | Amount Debited |
| W | No. of Pax |
| X | Remarks |
| Y | Comments |
| Z | Review by TL |
| AA | Check Distance |
| AB | If Distance >45 |

### KSA Distance Formula

```excel
=AIRPORT_DISTANCE(N2,Q2,R2)
```

| Reference | Description |
|---|---|
| N2 | Travel Type |
| Q2 | Airport |
| R2 | Location |

The formula returns the driving distance and estimated duration.

### KSA Distance Validation

| Item | Column |
|---|---|
| Distance input | AA |
| Validation output | AB |
| Distance threshold | 45 KM |

---

## Important Notes

- Confirm the column positions before copying formulas.
- Formula references may need adjustment if the spreadsheet structure changes.
- Use the correct formula for the relevant booking type.
- Keep this documentation updated when new columns are added.
- Verify the date and time columns before using validation formulas.

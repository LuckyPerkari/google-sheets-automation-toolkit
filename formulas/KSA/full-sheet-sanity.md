## Complete Sheet Sanity for KSA

```excel
=IF(
  COUNTA(A2:U2)=0,
  "",
  IFERROR(
    LET(
      JDate,
        IF(
          ISNUMBER(J2),
          J2,
          DATE(
            VALUE(RIGHT(TRIM(J2),4)),
            VALUE(MID(TRIM(J2),4,2)),
            VALUE(LEFT(TRIM(J2),2))
          )
        ),

      KDate,
        IF(
          ISNUMBER(K2),
          K2,
          DATE(
            VALUE(RIGHT(TRIM(K2),4)),
            VALUE(MID(TRIM(K2),4,2)),
            VALUE(LEFT(TRIM(K2),2))
          )
        ),

      Region,
        UPPER(TRIM(P2)),

      Airport,
        LOWER(TRIM(Q2)),

      ServiceType,
        LOWER(TRIM(S2)),

      CarType,
        LOWER(TRIM(T2)),

      RequestID,
        UPPER(TRIM(D2)),

      Status,
        LOWER(
          REGEXREPLACE(
            TRIM(
              SUBSTITUTE(U2,CHAR(160)," ")
            ),
            "\s+",
            ""
          )
        ),

      TravelType,
        LOWER(TRIM(N2)),

      IsRS,
        RIGHT(RequestID,3)="-RS",

      IsCA,
        RIGHT(RequestID,3)="-CA",

      ExpectedAirport,
        SWITCH(
          Region,
          "RUH","khaled",
          "DMM","fahd",
          "JED","abdulaziz",
          ""
        ),

      AirportValid,
        IF(
          AND(
            Region<>"",
            Airport<>""
          ),
          ISNUMBER(
            SEARCH(
              ExpectedAirport,
              Airport
            )
          ),
          FALSE
        ),

      ExpectedCar,
        SWITCH(
          ServiceType,
          "standard",
            "byd electric",

          "business",
            "lexus",

          "comfort",
            IF(
              OR(
                Region="RUH",
                Region="DMM"
              ),
              "chevrolet tahoe",
              IF(
                Region="JED",
                "toyota highlander",
                ""
              )
            ),

          "premium",
            "",

          ""
        ),

      CarValid,
        IF(
          ServiceType="premium",
          TRUE,
          IF(
            AND(
              ServiceType<>"",
              CarType<>""
            ),
            ISNUMBER(
              SEARCH(
                ExpectedCar,
                CarType
              )
            ),
            FALSE
          )
        ),

      FlightTimeValid,
        AND(
          L2<>"",
          M2<>"",
          L2<>"-",
          M2<>"-"
        ),

      MinutesDiff,
        IF(
          FlightTimeValid,
          ROUND(
            (
              (JDate+L2)-
              (KDate+M2)
            )*1440,
            0
          ),
          0
        ),

      TEXTJOIN(
        " | ",
        TRUE,

        IF(
          Status="invalid",
          "Invalid",
          ""
        ),

        IF(
          LEN(E2)<9,
          "Invalid Mobile",
          ""
        ),

        IF(
          G2="",
          "Missing Flight No",
          ""
        ),

        IF(
          AND(
            IsRS,
            Status<>"reschedule",
            Status<>"rescheduled",
            Status<>"invalid"
          ),
          "RS status mismatch",
          ""
        ),

        IF(
          AND(
            IsCA,
            Status<>"cancelled"
          ),
          "CA status mismatch",
          ""
        ),

        IF(
          AND(
            P2<>"",
            Q2<>"",
            NOT(AirportValid)
          ),
          "Airport mismatch",
          ""
        ),

        IF(
          AND(
            S2<>"",
            NOT(CarValid)
          ),
          "Car Type mismatch",
          ""
        ),

        IF(
          NOT(FlightTimeValid),
          "Missing Flight/Pickup Time",
          ""
        ),

        IF(
          AND(
            TravelType="departure",
            FlightTimeValid
          ),
          IF(
            MinutesDiff<60,
            "Departure <1 hr",
            IF(
              MinutesDiff>360,
              "Departure >6 hrs",
              ""
            )
          ),
          ""
        ),

        IF(
          AND(
            TravelType="arrival",
            FlightTimeValid
          ),
          IF(
            KDate<>JDate,
            "Arrival date mismatch",
            IF(
              (KDate+M2)<(JDate+L2),
              "Arrival before flight",
              IF(
                (KDate+M2)>(
                  JDate+L2+TIME(1,0,0)
                ),
                "Arrival >1 hr after flight",
                ""
              )
            )
          ),
          ""
        ),

        IF(
          AND(
            Status<>"invalid",
            LEN(E2)>=9,
            G2<>"",
            FlightTimeValid,

            OR(
              TravelType<>"departure",
              AND(
                MinutesDiff>=60,
                MinutesDiff<=360
              )
            ),

            OR(
              TravelType<>"arrival",
              AND(
                KDate=JDate,
                (KDate+M2)>=(JDate+L2),
                (KDate+M2)<=(
                  JDate+L2+TIME(1,0,0)
                )
              )
            ),

            AirportValid,

            CarValid,

            OR(
              NOT(IsRS),
              Status="reschedule",
              Status="rescheduled",
              Status="invalid"
            ),

            OR(
              NOT(IsCA),
              Status="cancelled"
            )
          ),
          "OK",
          ""
        )
      )
    ),
    "Error - Check Date/Time"
  )
)
```

## KSA Sheet Format

The regular KSA sheet uses the following column structure:

| Column | Header |
|---|---|
| A | S no |
| B | Employee Name |
| C | Service Type |
| D | Request ID |
| E | Contact |
| F | Passenger Name |
| G | Flight No |
| H | Voucher ID |
| I | Booking date |
| J | Flight Date |
| K | Pickup Date |
| L | Flight Time |
| M | Pick up Time |
| N | Travel Type |
| O | Terminal |
| P | Region |
| Q | Airport |
| R | Pickup/Drop off Location |
| S | Car Type |
| T | Assigned car |
| U | Status |
| V | Blank |
| W | No of Pax |
| X | Remarks |
| Y | comments |
| Z | Review by TL |

The existing KSA sanity formula uses columns A:U as its input range.

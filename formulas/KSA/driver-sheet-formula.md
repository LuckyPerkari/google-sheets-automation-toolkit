## Driver Sheet formula for KSA

```excel
=IF(
  COUNTA(A2:R2,T2:U2)=0,
  "",
  IFERROR(
    LET(
      FlightDate,
        IF(
          ISNUMBER(F2),
          F2,
          DATE(
            VALUE(RIGHT(TRIM(F2),4)),
            VALUE(MID(TRIM(F2),4,2)),
            VALUE(LEFT(TRIM(F2),2))
          )
        ),

      PickupDate,
        IF(
          ISNUMBER(G2),
          G2,
          DATE(
            VALUE(RIGHT(TRIM(G2),4)),
            VALUE(MID(TRIM(G2),4,2)),
            VALUE(LEFT(TRIM(G2),2))
          )
        ),

      Region,
        UPPER(TRIM(L2)),

      Airport,
        LOWER(TRIM(M2)),

      TravelType,
        LOWER(TRIM(J2)),

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
            Airport<>"",
            ExpectedAirport<>""
          ),
          ISNUMBER(
            SEARCH(
              ExpectedAirport,
              Airport
            )
          ),
          FALSE
        ),

      FlightTimeValid,
        AND(
          H2<>"",
          I2<>"",
          H2<>"-",
          I2<>"-"
        ),

      MinutesDiff,
        IF(
          FlightTimeValid,
          ROUND(
            (
              (FlightDate+H2)-
              (PickupDate+I2)
            )*1440,
            0
          ),
          0
        ),

      TEXTJOIN(
        " | ",
        TRUE,

        IF(
          LEN(C2)<9,
          "Invalid Mobile",
          ""
        ),

        IF(
          E2="",
          "Missing Flight No",
          ""
        ),

        IF(
          AND(
            L2<>"",
            M2<>"",
            NOT(AirportValid)
          ),
          "Airport mismatch",
          ""
        ),

        IF(
          NOT(FlightTimeValid),
          "Missing Flight/Pickup Time",
          ""
        ),

        IF(
          NOT(
            OR(
              TravelType="departure",
              TravelType="arrival"
            )
          ),
          "Invalid Travel Type",
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
            PickupDate<>FlightDate,
            "Arrival date mismatch",
            IF(
              (PickupDate+I2)<(FlightDate+H2),
              "Arrival before flight",
              IF(
                (PickupDate+I2)>(
                  FlightDate+H2+TIME(1,0,0)
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
            LEN(C2)>=9,
            E2<>"",
            FlightTimeValid,
            AirportValid,

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
                PickupDate=FlightDate,
                (PickupDate+I2)>=(FlightDate+H2),
                (PickupDate+I2)<=(
                  FlightDate+H2+TIME(1,0,0)
                )
              )
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

## Driver Sheet check Distance formula
```excel
=IFERROR(AIRPORT_DISTANCE(J2,M2,N2),"")
```

## Driver Sheet Check >45
```excel
=IFERROR(IF(T2="","",IF(VALUE(LEFT(T2,SEARCH(" KM",T2)-1))>45,"More than 45 KM","OK")),"Invalid Distance")
```

## Driver Sheet Format

The Driver Sheet uses the following column structure:

| Column | Header |
|---|---|
| A | Sr no |
| B | Req ID |
| C | Contact |
| D | Customer Name |
| E | Flight No |
| F | Flight Date |
| G | Pickup Date |
| H | Flight Time |
| I | Pick up Time |
| J | Travel Type |
| K | Terminal |
| L | Region |
| M | Airport |
| N | Pickup/Drop off Location |
| O | Car Type |
| P | Allocation |
| Q | No of Pax |
| R | Comments |
| S | Review by TL |
| T | Check distance |
| U | if distance >45 |

The Driver Sheet uses columns A:U for its primary data and validation fields.

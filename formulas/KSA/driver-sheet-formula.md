## Driver Sheet formula for KSA

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

      TravelType,
        LOWER(TRIM(N2)),

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
            P2<>"",
            Q2<>"",
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
            LEN(E2)>=9,
            G2<>"",
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
                KDate=JDate,
                (KDate+M2)>=(JDate+L2),
                (KDate+M2)<=(
                  JDate+L2+TIME(1,0,0)
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

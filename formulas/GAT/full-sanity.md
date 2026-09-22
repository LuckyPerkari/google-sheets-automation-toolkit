# GAT Full Sanity Formula

```excel
=IF(
  COUNTA(A2:V2)=0,
  "",
  IFERROR(
    LET(
      JDate,
        IF(
          ISNUMBER(K2),
          K2,
          DATE(
            VALUE(RIGHT(TRIM(K2),4)),
            VALUE(MID(TRIM(K2),4,2)),
            VALUE(LEFT(TRIM(K2),2))
          )
        ),

      KDate,
        IF(
          ISNUMBER(L2),
          L2,
          DATE(
            VALUE(RIGHT(TRIM(L2),4)),
            VALUE(MID(TRIM(L2),4,2)),
            VALUE(LEFT(TRIM(L2),2))
          )
        ),

      BankName,
        UPPER(TRIM(C2)),

      RequestID,
        UPPER(TRIM(E2)),

      BankCode,
        IFERROR(
          UPPER(
            TRIM(
              LEFT(
                RequestID,
                FIND("-",RequestID)-1
              )
            )
          ),
          ""
        ),

      Status,
        LOWER(
          REGEXREPLACE(
            TRIM(
              SUBSTITUTE(V2,CHAR(160)," ")
            ),
            "\s+",
            ""
          )
        ),

      TravelType,
        LOWER(TRIM(O2)),

      IsRS,
        RIGHT(RequestID,3)="-RS",

      IsCA,
        RIGHT(RequestID,3)="-CA",

      BankValid,
        AND(
          BankName<>"",
          BankCode<>"",
          BankName=BankCode
        ),

      FlightTimeValid,
        AND(
          M2<>"",
          N2<>"",
          M2<>"-",
          N2<>"-"
        ),

      MinutesDiff,
        IF(
          FlightTimeValid,
          ROUND(
            (
              (JDate+M2)-
              (KDate+N2)
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
          LEN(F2)<9,
          "Invalid Mobile",
          ""
        ),

        IF(
          H2="",
          "Missing Flight No",
          ""
        ),

        IF(
          E2="",
          "Missing Request ID",
          ""
        ),

        IF(
          OR(
            C2="",
            NOT(BankValid)
          ),
          "Bank Name mismatch",
          ""
        ),

        IF(
          AND(
            IsRS,
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
              (KDate+N2)<(JDate+M2),
              "Arrival before flight",
              IF(
                (KDate+N2)>(JDate+M2+TIME(1,0,0)),
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
            LEN(F2)>=9,
            H2<>"",
            E2<>"",
            FlightTimeValid,

            BankValid,

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
                (KDate+N2)>=(JDate+M2),
                (KDate+N2)<=(JDate+M2+TIME(1,0,0))
              )
            ),

            OR(
              NOT(IsRS),
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
This formula checks if the sheet is filled by following the format and the rules of the process.

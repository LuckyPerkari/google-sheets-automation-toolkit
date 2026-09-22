# GAT Distance Validation Formula

=IFERROR( IF( AB2="", "", IF( VALUE(LEFT(AB2,SEARCH(" KM",AB2)-1))>45, "More than 45 KM", "OK" ) ), "Invalid Distance" )

This formula checks if the distance is >45km
Note: This is a combination formula of Check Distance Formula

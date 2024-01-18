package com.starwarsprototype1.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AlignmentController {

    @GetMapping("/api/alignment")
    public String getAlignment(
            @RequestParam String answer1,
            @RequestParam String answer2,
            @RequestParam String answer3
    ) {
        // Implement your logic to determine alignment based on user answers
        // Replace this logic with your own
        if (answer1.equalsIgnoreCase("light") && answer2.equalsIgnoreCase("peace")) {
            return "You belong to the Light Side of the Force!";
        } else {
            return "You are drawn to the Dark Side of the Force.";
        }
    }
}

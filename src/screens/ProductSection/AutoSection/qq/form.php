<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meeting Request Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        form {
            max-width: 600px;
            margin: auto;
        }

        label {
            display: block;
            margin-bottom: 5px;
        }

        input, select, textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            box-sizing: border-box;
        }

        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <h2>Meeting Request Form</h2>

    <form action="./sub.php" method="post">

        <fieldset>
            <legend>Company Information:</legend>
            <label for="companyName">Company Name:</label>
            <input type="text" id="companyName" name="companyName" required>

            <label for="industrySegment">Industry Segment:</label>
            <input type="text" id="industrySegment" name="industrySegment" required>

            <label for="website">Website:</label>
            <input type="url" id="website" name="website" required>
        </fieldset>

        <fieldset>
            <legend>Contact Person Details:</legend>
            <label for="contactName">4. Name:</label>
        <input type="text" id="contactName" name="contactName" required>

        <label for="position">5. Position:</label>
        <input type="text" id="position" name="position" required>

        <label for="email">6. Email Address:</label>
        <input type="email" id="email" name="email" required>

        <label for="phone">7. Phone Number:</label>
        <input type="tel" id="phone" name="phone" required>
        </fieldset>

        <fieldset>
            <legend>Meeting Preferences:</legend>
            <label for="meetingDateTime">8. Preferred Date and Time:</label>
        <input type="datetime-local" id="meetingDateTime" name="meetingDateTime" required>

        <label for="meetingPlatform">9. Platform of Choice:</label>
        <select id="meetingPlatform" name="meetingPlatform" required>
            <option value="Zoom">Zoom</option>
            <option value="MicrosoftTeams">Microsoft Teams</option>
            <!-- Add more options as needed -->
        </select>
        </fieldset>

        <fieldset>
            <legend>Discussion Focus:</legend>
            <label for="productInterest">10. Specific Products or Categories of Interest:</label>
        <input type="text" id="productInterest" name="productInterest">

        <label for="challenges">11. Current Challenges or Requirements:</label>
        <textarea id="challenges" name="challenges" rows="4"></textarea>

        <label for="additionalInfo">12. Any Additional Information:</label>
        <textarea id="additionalInfo" name="additionalInfo" rows="4"></textarea>
        </fieldset>

        <button type="submit">Submit</button>

    </form>

</body>
</html>

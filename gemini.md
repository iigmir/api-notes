# [Gemini](https://ai.google.com)

* <https://ai.google.dev/>
* <https://blog.jiatool.com/posts/gemini_api>

You must have a API key from [Google Developers](https://ai.google.dev). Obviously.

## cURL

```bash
$ curl -H 'Content-Type: application/json' -d '{"contents":[{"parts":[{"text":"Write a story about a magic backpack"}]}]}' -X POST 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY'
```

```php
<?php

// API endpoint
$url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY';

// Data to be sent in JSON format
$data = array(
    'contents' => array(
        array(
            'parts' => array(
                array(
                    'text' => 'Write a story about a magic backpack'
                )
            )
        )
    )
);

// Convert data array to JSON format
$postData = json_encode($data);

// Initialize cURL session
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute cURL session
$response = curl_exec($ch);

// Check for errors
if ($response === false) {
    echo 'cURL Error: ' . curl_error($ch);
} else {
    // Output response
    echo $response;
}

// Close cURL session
curl_close($ch);
```

## Google SDK

* <https://esm.run/@google/generative-ai>
* <https://github.com/google/generative-ai-js>
* <https://ai.google.dev/api/rest/v1/Content>

## Webpage

* <https://github.com/iigmir/gmini-api-f2e>
* <https://ai.google.dev/tutorials/get_started_web>

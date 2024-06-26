/**
 * Handles form submission for device data.
 * Retrieves serial number and port number from form inputs,
 * sends them as JSON data to the backend API endpoint for saving.
 * Displays a success message with the saved device ID or alerts
 * the user in case of an error.
 */
function submitForm() {
    // Retrieve values from form inputs
   const title = document.getElementById('title').value;
   const content = document.getElementById('content').value;
   const preview  = content.substring(0,450);
   if(title.length === 0) {
    alert("title required");
    return
   }else if(content.length === 0){
    alert("content required");
    return
   }


    // Prepare data object to send as JSON
   const data = {
       title: title,
       preview:preview,
       content: content
   };

    // Send POST request to backend API
   fetch('http://localhost:8080/api/posts', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
   })
   .then(response => response.json()) // Parse JSON response from the server
   .then(device => {
       // Handle successful response
       savedDeviceId = device.id;
       alert('Data saved as JSON. Device ID: ' + savedDeviceId);
       console.log(device)
   })
   .catch(error => {
       // Handle errors
       console.error('Error:', error);
       alert('Error saving data.');
   });
}

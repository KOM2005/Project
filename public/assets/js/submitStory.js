$(document).ready(function () {

    $("#SubmitStory").on("click", function () {
        event.preventDefault();

        
            var writeStoryBody = {
                body: $("#storyBody").val()
              
            }

            //This Works!!!!
            //We are getting an object for the database
            // console.log(writeStoryBody);

            //Ajax call here:
            $.ajax({
                type: "POST",
                url: "/api/writeStory",
                data: JSON.stringify(writeStoryBody),
                // data: writeStoryBody,
                dataType: 'json',
                contentType: 'application/json',
                success: function (writeStoryBody) {
                    console.log(writeStoryBody)
                }

            })

            //Clear form values
            title: $("#storyBody").val("");
      


        })




    })//End of document.ready 
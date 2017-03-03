set_1_json = {
"frame_1": ["the500by300.png", "layers3.gif", "none", "none"],
"frame_2": ["same", "same", "balloon4_400by200.png", "none"],
"frame_3": ["same", "same", "balloon1_400by200.png", "none"],
"frame_4": ["same", "none", "none", "none"],
"frame_5": ["the600by400.png", "layers2.gif", "none", "none"],
"frame_6": ["same", "same", "none", "balloon1_400by200.png"],
"frame_7": ["same", "none", "balloon3_400by200.png", "same"],
"frame_8": ["same", "none", "same", "none"],
"frame_9": ["the750by320.png", "none", "none", "none"],
"frame_10": ["same", "none", "balloon2_400by200.png", "none"]
};

// whenever read the next frame line, create / revise current array
// num_times_loop = Object.keys(set_1_json).length
// frame_num = "frame_" + String(loop_num)

num = Object.keys(set_1_json).length
for (ii=0; ii< num; ii++){
    fr = "frame_" + String(ii+1);
    layers_per_fr = 4
    //console.log(fr + " : " + set_1_json[fr]);
    for (iii=0; iii < layers_per_fr; iii++){
        if (set_1_json[fr][iii] === "same"){
            console.log("THE SAME!!" + "ii: " + ii + " iii: " + iii + " layers_per_fr: " + layers_per_fr); // run a function
        } else if (set_1_json[fr][iii] === "none"){
            console.log("IT'S NONE!!" + "ii: " + ii + " iii: " + iii + " layers_per_fr: " + layers_per_fr); // run a function
            console.log("#images"+ String(iii) + " div " + " add text '' ");
            //$("#images"+ String(iii)).text("");
            // break; /* this jumps to next iteration of loop */
        } else {
            console.log("PROPER NAME!!!!!!!" + "ii: " + ii + " iii: " + iii + " layers_per_fr: " + layers_per_fr);
            console.log("#images"+ String(iii) + " div " + " add img src " + set_1_json[fr][iii]);
            // if (www.layer[0].file_name === set_1_json[fr][iii]) { console.log("some function");}

        }
        //console.log(set_1_json[fr][iii]);
    }
};  /// iii number directly related to images + iii div ID

//  ii+1 is the frame number; iii is the layer - or the index position

/*
$("#images0").text("");
#images + String(iii)
*/
// The result of that loop is printing 1 through 10

rrr = []
if (rrr[0] === undefined ) {
  console.log("no define");
  rrr = set_1_json.frame_1
};
if (frame_num === "none") {
  // make that one blank or clear it
} else if (frame_num === "same") {
 // don't change the value of that string in the rrr array
}

// The above code converts rrr into the current frame array


// first part, if "same" then name not replaced
// if "none" then $('#images' + i.toString()).text("");

//Object.keys(set_1_json).length
//10
//set_1_json.frame_2[0]
//"same"
// index position dictates their z-index Images0 through Images3
// set_1_json.frame_2.length
// 4
/*
Object.keys(aaa[0].frame)
["asdf", "rety", "werrrr", "qwe", "wer"]
Object.values(aaa[0].frame)
[234, "erter", 2342, Object, 323]
Object(aaa[0].frame).rety
"erter"
aaa[0].frame.rety
"erter"
*/
// iterate through the JSON until you get match
// using that index number, you find other data you need,
// like width and height

// use the height and width from other.json_data
// make up a default top position based on index position
// say 300 or 350 * index position

// then that index position in the shorthand "JSON" on this page is
// used "images" + Index div ID name

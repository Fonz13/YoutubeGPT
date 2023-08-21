from youtube_transcript_api import YouTubeTranscriptApi


def get_transcript(video_url):
    try:
        video_id = video_url.split("watch?v=")[1]
    except:
        return {"Error": "Invalid URL"}
    
    try:
        srt = YouTubeTranscriptApi.get_transcript(video_id)
    except:
        return {"Error": "Transcript not found"}
        # implement audio to text generation here

    
    transcript = {}

    with open("transcript.txt", "w") as t_file, open("transcript_timestamps.txt", "w") as tt_file:
        for i in srt:
            t_file.write(i["text"] + "\n")
            tt_file.write(f"{i['start']} {i['duration']} {i['text']} \n")
            transcript[i["start"]] = i["text"]
    return transcript
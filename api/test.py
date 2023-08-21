from get_transcript import get_transcript

url = "https://www.youtube.com/watch?v=0zb2kohYZIM"
#url = "eff"

try:
    link_id = url.split("watch?v=")[1]
except:
    print("Error" "Invalid URL")
    exit()
transcript = get_transcript(link_id)

print(transcript)
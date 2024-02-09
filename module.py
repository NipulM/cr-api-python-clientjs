import urllib.request
import json

with open("my_key.txt") as file:
    my_key = file.read().rstrip("\n")
    base_url = "https://api.clashroyale.com/v1"
    endpoint = "/cards"

    request = urllib.request.Request(
                    base_url + endpoint,
                    None,
                    {
                            "Authorization": "Bearer %s" % my_key
                    }
            )
    
    response = urllib.request.urlopen(request).read().decode("utf-8")

    data = json.loads(response)
    data_json = json.dumps(data)
    
print(data_json)

with open("data.json", "w") as json_file:
    json.dump(data, json_file)

# user_request = input("Enter the card name that you'd like to analyis: ").lower()
# def get_user_request(card_name):
#     for card in data["items"]:
#         if card["name"].lower() == card_name:
#             print(f"Card ID: {card['id']}\nCard Name: {card['name']}\nElixir Cost: {card['elixirCost']}\nCard Rarity: {card['rarity'][0].upper() + card['rarity'][1:]}\nImage URL: {card['iconUrls']['medium']}", end='')
    
# card_name = get_user_request(user_request)
# print()

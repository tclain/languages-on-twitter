from pubnub import Pubnub

class Stream():
    @staticmethod
    def run(callback):
        pubnub = Pubnub(
            'demo',
            'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
        )
        pubnub.subscribe(
            channels='pubnub-twitter',
            callback= callback
        )
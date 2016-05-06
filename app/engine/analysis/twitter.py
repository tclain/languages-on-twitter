from language import Language
class TweetAnalyser():
    '''
    Analyse Language and word/chars statistics
    return a hash :
    {
        "lang" : "english",
        "word_count" : "12",
        "lexical_diversity" : 0.52
    }
    '''
    @staticmethod
    def stats(tweet):
        inner_text = tweet["text"]
        guess = Language.guess(inner_text)
        print inner_text[0:20], guess
        return {"tweet" : tweet, "lang" : guess}

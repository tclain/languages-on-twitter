from nltk.corpus import stopwords
from nltk import wordpunct_tokenize

from polyglot.text import Text, Word

class Language():
    '''
    http://h6o6.com/2012/12/detecting-language-with-python-and-the-natural-language-toolkit-nltk/
    '''
    @staticmethod
    def language_likelihood(input_text):
        """Return a dictionary of languages and their likelihood of being the
        natural language of the input text
        """

        input_text = input_text.lower()
        input_words = wordpunct_tokenize(input_text)

        language_likelihood = {}
        total_matches = 0
        for language in stopwords._fileids:
            language_likelihood[language] = len(set(input_words) &
                                                set(stopwords.words(language)))

        return language_likelihood
    @staticmethod
    def guess_nltk(input_text):
        """Return the most likely language of the given text
        """
        likelihoods = Language.language_likelihood(input_text)
        return sorted(likelihoods, key=likelihoods.get, reverse=True)[0]
    @staticmethod
    def guess(input_text):
        return Language.guess_polyglot(input_text)
    @staticmethod
    def guess_polyglot(input_text):
        analysed_text  = Text(input_text)
        return analysed_text.language.name



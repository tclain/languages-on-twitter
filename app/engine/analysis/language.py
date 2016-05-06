from polyglot.text import Text, Word

class Language():
    '''
    http://h6o6.com/2012/12/detecting-language-with-python-and-the-natural-language-toolkit-nltk/
    '''
    @staticmethod
    def guess(input_text):
        return Language.guess_polyglot(input_text)
    @staticmethod
    def guess_polyglot(input_text):
        analysed_text  = Text(input_text)
        return analysed_text.language.name



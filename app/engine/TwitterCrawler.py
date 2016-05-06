#-*- coding=utf-8 -*-
import threading

from stream.twitter import Stream
from analysis.twitter import TweetAnalyser


class TwitterCrawler(threading.Thread):
    def __init__(self, socket,namespace):
        self.socket = socket
        self.namespace = namespace
        threading.Thread.__init__(self)
    ### emit a analysed version of each new tweet
    def emit_tweet(self,message,channel):
        analysis = TweetAnalyser.stats(message)
        print analysis
        self.socket.emit('server.tweet.new',analysis, namespace=self.namespace)

    def run(self):
        Stream.run(self.emit_tweet)

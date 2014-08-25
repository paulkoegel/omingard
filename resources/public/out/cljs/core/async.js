// Compiled by ClojureScript 0.0-2277
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10876 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10876 = (function (f,fn_handler,meta10877){
this.f = f;
this.fn_handler = fn_handler;
this.meta10877 = meta10877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10876.cljs$lang$type = true;
cljs.core.async.t10876.cljs$lang$ctorStr = "cljs.core.async/t10876";
cljs.core.async.t10876.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t10876");
});
cljs.core.async.t10876.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10876.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10876.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10878){var self__ = this;
var _10878__$1 = this;return self__.meta10877;
});
cljs.core.async.t10876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10878,meta10877__$1){var self__ = this;
var _10878__$1 = this;return (new cljs.core.async.t10876(self__.f,self__.fn_handler,meta10877__$1));
});
cljs.core.async.__GT_t10876 = (function __GT_t10876(f__$1,fn_handler__$1,meta10877){return (new cljs.core.async.t10876(f__$1,fn_handler__$1,meta10877));
});
}
return (new cljs.core.async.t10876(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10880 = buff;if(G__10880)
{var bit__4191__auto__ = null;if(cljs.core.truth_((function (){var or__3541__auto__ = bit__4191__auto__;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return G__10880.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10880.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10880);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10880);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10881 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10881);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10881,ret){
return (function (){return fn1.call(null,val_10881);
});})(val_10881,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4397__auto___10882 = n;var x_10883 = (0);while(true){
if((x_10883 < n__4397__auto___10882))
{(a[x_10883] = (0));
{
var G__10884 = (x_10883 + (1));
x_10883 = G__10884;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10885 = (i + (1));
i = G__10885;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10889 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10889 = (function (flag,alt_flag,meta10890){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10890 = meta10890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10889.cljs$lang$type = true;
cljs.core.async.t10889.cljs$lang$ctorStr = "cljs.core.async/t10889";
cljs.core.async.t10889.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t10889");
});})(flag))
;
cljs.core.async.t10889.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10891){var self__ = this;
var _10891__$1 = this;return self__.meta10890;
});})(flag))
;
cljs.core.async.t10889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10891,meta10890__$1){var self__ = this;
var _10891__$1 = this;return (new cljs.core.async.t10889(self__.flag,self__.alt_flag,meta10890__$1));
});})(flag))
;
cljs.core.async.__GT_t10889 = ((function (flag){
return (function __GT_t10889(flag__$1,alt_flag__$1,meta10890){return (new cljs.core.async.t10889(flag__$1,alt_flag__$1,meta10890));
});})(flag))
;
}
return (new cljs.core.async.t10889(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10895 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10895 = (function (cb,flag,alt_handler,meta10896){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10896 = meta10896;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10895.cljs$lang$type = true;
cljs.core.async.t10895.cljs$lang$ctorStr = "cljs.core.async/t10895";
cljs.core.async.t10895.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t10895");
});
cljs.core.async.t10895.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10895.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10895.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10897){var self__ = this;
var _10897__$1 = this;return self__.meta10896;
});
cljs.core.async.t10895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10897,meta10896__$1){var self__ = this;
var _10897__$1 = this;return (new cljs.core.async.t10895(self__.cb,self__.flag,self__.alt_handler,meta10896__$1));
});
cljs.core.async.__GT_t10895 = (function __GT_t10895(cb__$1,flag__$1,alt_handler__$1,meta10896){return (new cljs.core.async.t10895(cb__$1,flag__$1,alt_handler__$1,meta10896));
});
}
return (new cljs.core.async.t10895(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10898_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10898_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10899_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10899_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3541__auto__ = wport;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10900 = (i + (1));
i = G__10900;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3541__auto__ = ret;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3529__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3529__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10901){var map__10903 = p__10901;var map__10903__$1 = ((cljs.core.seq_QMARK_.call(null,map__10903))?cljs.core.apply.call(null,cljs.core.hash_map,map__10903):map__10903);var opts = map__10903__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__10901 = null;if (arguments.length > 1) {
  p__10901 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10901);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10904){
var ports = cljs.core.first(arglist__10904);
var p__10901 = cljs.core.rest(arglist__10904);
return alts_BANG___delegate(ports,p__10901);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10912 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10912 = (function (ch,f,map_LT_,meta10913){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10913 = meta10913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10912.cljs$lang$type = true;
cljs.core.async.t10912.cljs$lang$ctorStr = "cljs.core.async/t10912";
cljs.core.async.t10912.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t10912");
});
cljs.core.async.t10912.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10912.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10912.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10912.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10915 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10915 = (function (fn1,_,meta10913,ch,f,map_LT_,meta10916){
this.fn1 = fn1;
this._ = _;
this.meta10913 = meta10913;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10916 = meta10916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10915.cljs$lang$type = true;
cljs.core.async.t10915.cljs$lang$ctorStr = "cljs.core.async/t10915";
cljs.core.async.t10915.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t10915");
});})(___$1))
;
cljs.core.async.t10915.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10915.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10915.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10915.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10905_SHARP_){return f1.call(null,(((p1__10905_SHARP_ == null))?null:self__.f.call(null,p1__10905_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10915.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10917){var self__ = this;
var _10917__$1 = this;return self__.meta10916;
});})(___$1))
;
cljs.core.async.t10915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10917,meta10916__$1){var self__ = this;
var _10917__$1 = this;return (new cljs.core.async.t10915(self__.fn1,self__._,self__.meta10913,self__.ch,self__.f,self__.map_LT_,meta10916__$1));
});})(___$1))
;
cljs.core.async.__GT_t10915 = ((function (___$1){
return (function __GT_t10915(fn1__$1,___$2,meta10913__$1,ch__$2,f__$2,map_LT___$2,meta10916){return (new cljs.core.async.t10915(fn1__$1,___$2,meta10913__$1,ch__$2,f__$2,map_LT___$2,meta10916));
});})(___$1))
;
}
return (new cljs.core.async.t10915(fn1,___$1,self__.meta10913,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3529__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10912.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10912.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10912.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10914){var self__ = this;
var _10914__$1 = this;return self__.meta10913;
});
cljs.core.async.t10912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10914,meta10913__$1){var self__ = this;
var _10914__$1 = this;return (new cljs.core.async.t10912(self__.ch,self__.f,self__.map_LT_,meta10913__$1));
});
cljs.core.async.__GT_t10912 = (function __GT_t10912(ch__$1,f__$1,map_LT___$1,meta10913){return (new cljs.core.async.t10912(ch__$1,f__$1,map_LT___$1,meta10913));
});
}
return (new cljs.core.async.t10912(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10921 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10921 = (function (ch,f,map_GT_,meta10922){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10922 = meta10922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10921.cljs$lang$type = true;
cljs.core.async.t10921.cljs$lang$ctorStr = "cljs.core.async/t10921";
cljs.core.async.t10921.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t10921");
});
cljs.core.async.t10921.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10921.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10921.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10921.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10921.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10921.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10923){var self__ = this;
var _10923__$1 = this;return self__.meta10922;
});
cljs.core.async.t10921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10923,meta10922__$1){var self__ = this;
var _10923__$1 = this;return (new cljs.core.async.t10921(self__.ch,self__.f,self__.map_GT_,meta10922__$1));
});
cljs.core.async.__GT_t10921 = (function __GT_t10921(ch__$1,f__$1,map_GT___$1,meta10922){return (new cljs.core.async.t10921(ch__$1,f__$1,map_GT___$1,meta10922));
});
}
return (new cljs.core.async.t10921(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10927 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10927 = (function (ch,p,filter_GT_,meta10928){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10928 = meta10928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10927.cljs$lang$type = true;
cljs.core.async.t10927.cljs$lang$ctorStr = "cljs.core.async/t10927";
cljs.core.async.t10927.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t10927");
});
cljs.core.async.t10927.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10927.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10927.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10927.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10927.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10927.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10927.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10929){var self__ = this;
var _10929__$1 = this;return self__.meta10928;
});
cljs.core.async.t10927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10929,meta10928__$1){var self__ = this;
var _10929__$1 = this;return (new cljs.core.async.t10927(self__.ch,self__.p,self__.filter_GT_,meta10928__$1));
});
cljs.core.async.__GT_t10927 = (function __GT_t10927(ch__$1,p__$1,filter_GT___$1,meta10928){return (new cljs.core.async.t10927(ch__$1,p__$1,filter_GT___$1,meta10928));
});
}
return (new cljs.core.async.t10927(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6357__auto___11012 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto___11012,out){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto___11012,out){
return (function (state_10991){var state_val_10992 = (state_10991[(1)]);if((state_val_10992 === (7)))
{var inst_10987 = (state_10991[(2)]);var state_10991__$1 = state_10991;var statearr_10993_11013 = state_10991__$1;(statearr_10993_11013[(2)] = inst_10987);
(statearr_10993_11013[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10992 === (1)))
{var state_10991__$1 = state_10991;var statearr_10994_11014 = state_10991__$1;(statearr_10994_11014[(2)] = null);
(statearr_10994_11014[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10992 === (4)))
{var inst_10973 = (state_10991[(7)]);var inst_10973__$1 = (state_10991[(2)]);var inst_10974 = (inst_10973__$1 == null);var state_10991__$1 = (function (){var statearr_10995 = state_10991;(statearr_10995[(7)] = inst_10973__$1);
return statearr_10995;
})();if(cljs.core.truth_(inst_10974))
{var statearr_10996_11015 = state_10991__$1;(statearr_10996_11015[(1)] = (5));
} else
{var statearr_10997_11016 = state_10991__$1;(statearr_10997_11016[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10992 === (6)))
{var inst_10973 = (state_10991[(7)]);var inst_10978 = p.call(null,inst_10973);var state_10991__$1 = state_10991;if(cljs.core.truth_(inst_10978))
{var statearr_10998_11017 = state_10991__$1;(statearr_10998_11017[(1)] = (8));
} else
{var statearr_10999_11018 = state_10991__$1;(statearr_10999_11018[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10992 === (3)))
{var inst_10989 = (state_10991[(2)]);var state_10991__$1 = state_10991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10991__$1,inst_10989);
} else
{if((state_val_10992 === (2)))
{var state_10991__$1 = state_10991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10991__$1,(4),ch);
} else
{if((state_val_10992 === (11)))
{var inst_10981 = (state_10991[(2)]);var state_10991__$1 = state_10991;var statearr_11000_11019 = state_10991__$1;(statearr_11000_11019[(2)] = inst_10981);
(statearr_11000_11019[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10992 === (9)))
{var state_10991__$1 = state_10991;var statearr_11001_11020 = state_10991__$1;(statearr_11001_11020[(2)] = null);
(statearr_11001_11020[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10992 === (5)))
{var inst_10976 = cljs.core.async.close_BANG_.call(null,out);var state_10991__$1 = state_10991;var statearr_11002_11021 = state_10991__$1;(statearr_11002_11021[(2)] = inst_10976);
(statearr_11002_11021[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10992 === (10)))
{var inst_10984 = (state_10991[(2)]);var state_10991__$1 = (function (){var statearr_11003 = state_10991;(statearr_11003[(8)] = inst_10984);
return statearr_11003;
})();var statearr_11004_11022 = state_10991__$1;(statearr_11004_11022[(2)] = null);
(statearr_11004_11022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10992 === (8)))
{var inst_10973 = (state_10991[(7)]);var state_10991__$1 = state_10991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10991__$1,(11),out,inst_10973);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6357__auto___11012,out))
;return ((function (switch__6342__auto__,c__6357__auto___11012,out){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_11008 = [null,null,null,null,null,null,null,null,null];(statearr_11008[(0)] = state_machine__6343__auto__);
(statearr_11008[(1)] = (1));
return statearr_11008;
});
var state_machine__6343__auto____1 = (function (state_10991){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_10991);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e11009){if((e11009 instanceof Object))
{var ex__6346__auto__ = e11009;var statearr_11010_11023 = state_10991;(statearr_11010_11023[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10991);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11009;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11024 = state_10991;
state_10991 = G__11024;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_10991){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_10991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto___11012,out))
})();var state__6359__auto__ = (function (){var statearr_11011 = f__6358__auto__.call(null);(statearr_11011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto___11012);
return statearr_11011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto___11012,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6357__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto__){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto__){
return (function (state_11190){var state_val_11191 = (state_11190[(1)]);if((state_val_11191 === (7)))
{var inst_11186 = (state_11190[(2)]);var state_11190__$1 = state_11190;var statearr_11192_11233 = state_11190__$1;(statearr_11192_11233[(2)] = inst_11186);
(statearr_11192_11233[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (20)))
{var inst_11156 = (state_11190[(7)]);var inst_11167 = (state_11190[(2)]);var inst_11168 = cljs.core.next.call(null,inst_11156);var inst_11142 = inst_11168;var inst_11143 = null;var inst_11144 = (0);var inst_11145 = (0);var state_11190__$1 = (function (){var statearr_11193 = state_11190;(statearr_11193[(8)] = inst_11144);
(statearr_11193[(9)] = inst_11142);
(statearr_11193[(10)] = inst_11167);
(statearr_11193[(11)] = inst_11145);
(statearr_11193[(12)] = inst_11143);
return statearr_11193;
})();var statearr_11194_11234 = state_11190__$1;(statearr_11194_11234[(2)] = null);
(statearr_11194_11234[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (1)))
{var state_11190__$1 = state_11190;var statearr_11195_11235 = state_11190__$1;(statearr_11195_11235[(2)] = null);
(statearr_11195_11235[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (4)))
{var inst_11131 = (state_11190[(13)]);var inst_11131__$1 = (state_11190[(2)]);var inst_11132 = (inst_11131__$1 == null);var state_11190__$1 = (function (){var statearr_11196 = state_11190;(statearr_11196[(13)] = inst_11131__$1);
return statearr_11196;
})();if(cljs.core.truth_(inst_11132))
{var statearr_11197_11236 = state_11190__$1;(statearr_11197_11236[(1)] = (5));
} else
{var statearr_11198_11237 = state_11190__$1;(statearr_11198_11237[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (15)))
{var state_11190__$1 = state_11190;var statearr_11202_11238 = state_11190__$1;(statearr_11202_11238[(2)] = null);
(statearr_11202_11238[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (21)))
{var state_11190__$1 = state_11190;var statearr_11203_11239 = state_11190__$1;(statearr_11203_11239[(2)] = null);
(statearr_11203_11239[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (13)))
{var inst_11144 = (state_11190[(8)]);var inst_11142 = (state_11190[(9)]);var inst_11145 = (state_11190[(11)]);var inst_11143 = (state_11190[(12)]);var inst_11152 = (state_11190[(2)]);var inst_11153 = (inst_11145 + (1));var tmp11199 = inst_11144;var tmp11200 = inst_11142;var tmp11201 = inst_11143;var inst_11142__$1 = tmp11200;var inst_11143__$1 = tmp11201;var inst_11144__$1 = tmp11199;var inst_11145__$1 = inst_11153;var state_11190__$1 = (function (){var statearr_11204 = state_11190;(statearr_11204[(14)] = inst_11152);
(statearr_11204[(8)] = inst_11144__$1);
(statearr_11204[(9)] = inst_11142__$1);
(statearr_11204[(11)] = inst_11145__$1);
(statearr_11204[(12)] = inst_11143__$1);
return statearr_11204;
})();var statearr_11205_11240 = state_11190__$1;(statearr_11205_11240[(2)] = null);
(statearr_11205_11240[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (22)))
{var state_11190__$1 = state_11190;var statearr_11206_11241 = state_11190__$1;(statearr_11206_11241[(2)] = null);
(statearr_11206_11241[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (6)))
{var inst_11131 = (state_11190[(13)]);var inst_11140 = f.call(null,inst_11131);var inst_11141 = cljs.core.seq.call(null,inst_11140);var inst_11142 = inst_11141;var inst_11143 = null;var inst_11144 = (0);var inst_11145 = (0);var state_11190__$1 = (function (){var statearr_11207 = state_11190;(statearr_11207[(8)] = inst_11144);
(statearr_11207[(9)] = inst_11142);
(statearr_11207[(11)] = inst_11145);
(statearr_11207[(12)] = inst_11143);
return statearr_11207;
})();var statearr_11208_11242 = state_11190__$1;(statearr_11208_11242[(2)] = null);
(statearr_11208_11242[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (17)))
{var inst_11156 = (state_11190[(7)]);var inst_11160 = cljs.core.chunk_first.call(null,inst_11156);var inst_11161 = cljs.core.chunk_rest.call(null,inst_11156);var inst_11162 = cljs.core.count.call(null,inst_11160);var inst_11142 = inst_11161;var inst_11143 = inst_11160;var inst_11144 = inst_11162;var inst_11145 = (0);var state_11190__$1 = (function (){var statearr_11209 = state_11190;(statearr_11209[(8)] = inst_11144);
(statearr_11209[(9)] = inst_11142);
(statearr_11209[(11)] = inst_11145);
(statearr_11209[(12)] = inst_11143);
return statearr_11209;
})();var statearr_11210_11243 = state_11190__$1;(statearr_11210_11243[(2)] = null);
(statearr_11210_11243[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (3)))
{var inst_11188 = (state_11190[(2)]);var state_11190__$1 = state_11190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11190__$1,inst_11188);
} else
{if((state_val_11191 === (12)))
{var inst_11176 = (state_11190[(2)]);var state_11190__$1 = state_11190;var statearr_11211_11244 = state_11190__$1;(statearr_11211_11244[(2)] = inst_11176);
(statearr_11211_11244[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (2)))
{var state_11190__$1 = state_11190;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11190__$1,(4),in$);
} else
{if((state_val_11191 === (23)))
{var inst_11184 = (state_11190[(2)]);var state_11190__$1 = state_11190;var statearr_11212_11245 = state_11190__$1;(statearr_11212_11245[(2)] = inst_11184);
(statearr_11212_11245[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (19)))
{var inst_11171 = (state_11190[(2)]);var state_11190__$1 = state_11190;var statearr_11213_11246 = state_11190__$1;(statearr_11213_11246[(2)] = inst_11171);
(statearr_11213_11246[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (11)))
{var inst_11142 = (state_11190[(9)]);var inst_11156 = (state_11190[(7)]);var inst_11156__$1 = cljs.core.seq.call(null,inst_11142);var state_11190__$1 = (function (){var statearr_11214 = state_11190;(statearr_11214[(7)] = inst_11156__$1);
return statearr_11214;
})();if(inst_11156__$1)
{var statearr_11215_11247 = state_11190__$1;(statearr_11215_11247[(1)] = (14));
} else
{var statearr_11216_11248 = state_11190__$1;(statearr_11216_11248[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (9)))
{var inst_11178 = (state_11190[(2)]);var inst_11179 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11190__$1 = (function (){var statearr_11217 = state_11190;(statearr_11217[(15)] = inst_11178);
return statearr_11217;
})();if(cljs.core.truth_(inst_11179))
{var statearr_11218_11249 = state_11190__$1;(statearr_11218_11249[(1)] = (21));
} else
{var statearr_11219_11250 = state_11190__$1;(statearr_11219_11250[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (5)))
{var inst_11134 = cljs.core.async.close_BANG_.call(null,out);var state_11190__$1 = state_11190;var statearr_11220_11251 = state_11190__$1;(statearr_11220_11251[(2)] = inst_11134);
(statearr_11220_11251[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (14)))
{var inst_11156 = (state_11190[(7)]);var inst_11158 = cljs.core.chunked_seq_QMARK_.call(null,inst_11156);var state_11190__$1 = state_11190;if(inst_11158)
{var statearr_11221_11252 = state_11190__$1;(statearr_11221_11252[(1)] = (17));
} else
{var statearr_11222_11253 = state_11190__$1;(statearr_11222_11253[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (16)))
{var inst_11174 = (state_11190[(2)]);var state_11190__$1 = state_11190;var statearr_11223_11254 = state_11190__$1;(statearr_11223_11254[(2)] = inst_11174);
(statearr_11223_11254[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11191 === (10)))
{var inst_11145 = (state_11190[(11)]);var inst_11143 = (state_11190[(12)]);var inst_11150 = cljs.core._nth.call(null,inst_11143,inst_11145);var state_11190__$1 = state_11190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11190__$1,(13),out,inst_11150);
} else
{if((state_val_11191 === (18)))
{var inst_11156 = (state_11190[(7)]);var inst_11165 = cljs.core.first.call(null,inst_11156);var state_11190__$1 = state_11190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11190__$1,(20),out,inst_11165);
} else
{if((state_val_11191 === (8)))
{var inst_11144 = (state_11190[(8)]);var inst_11145 = (state_11190[(11)]);var inst_11147 = (inst_11145 < inst_11144);var inst_11148 = inst_11147;var state_11190__$1 = state_11190;if(cljs.core.truth_(inst_11148))
{var statearr_11224_11255 = state_11190__$1;(statearr_11224_11255[(1)] = (10));
} else
{var statearr_11225_11256 = state_11190__$1;(statearr_11225_11256[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6357__auto__))
;return ((function (switch__6342__auto__,c__6357__auto__){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_11229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11229[(0)] = state_machine__6343__auto__);
(statearr_11229[(1)] = (1));
return statearr_11229;
});
var state_machine__6343__auto____1 = (function (state_11190){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_11190);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e11230){if((e11230 instanceof Object))
{var ex__6346__auto__ = e11230;var statearr_11231_11257 = state_11190;(statearr_11231_11257[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11190);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11258 = state_11190;
state_11190 = G__11258;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_11190){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_11190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto__))
})();var state__6359__auto__ = (function (){var statearr_11232 = f__6358__auto__.call(null);(statearr_11232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto__);
return statearr_11232;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto__))
);
return c__6357__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6357__auto___11353 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto___11353){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto___11353){
return (function (state_11329){var state_val_11330 = (state_11329[(1)]);if((state_val_11330 === (7)))
{var inst_11325 = (state_11329[(2)]);var state_11329__$1 = state_11329;var statearr_11331_11354 = state_11329__$1;(statearr_11331_11354[(2)] = inst_11325);
(statearr_11331_11354[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11330 === (1)))
{var state_11329__$1 = state_11329;var statearr_11332_11355 = state_11329__$1;(statearr_11332_11355[(2)] = null);
(statearr_11332_11355[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11330 === (4)))
{var inst_11308 = (state_11329[(7)]);var inst_11308__$1 = (state_11329[(2)]);var inst_11309 = (inst_11308__$1 == null);var state_11329__$1 = (function (){var statearr_11333 = state_11329;(statearr_11333[(7)] = inst_11308__$1);
return statearr_11333;
})();if(cljs.core.truth_(inst_11309))
{var statearr_11334_11356 = state_11329__$1;(statearr_11334_11356[(1)] = (5));
} else
{var statearr_11335_11357 = state_11329__$1;(statearr_11335_11357[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11330 === (13)))
{var state_11329__$1 = state_11329;var statearr_11336_11358 = state_11329__$1;(statearr_11336_11358[(2)] = null);
(statearr_11336_11358[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11330 === (6)))
{var inst_11308 = (state_11329[(7)]);var state_11329__$1 = state_11329;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11329__$1,(11),to,inst_11308);
} else
{if((state_val_11330 === (3)))
{var inst_11327 = (state_11329[(2)]);var state_11329__$1 = state_11329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11329__$1,inst_11327);
} else
{if((state_val_11330 === (12)))
{var state_11329__$1 = state_11329;var statearr_11337_11359 = state_11329__$1;(statearr_11337_11359[(2)] = null);
(statearr_11337_11359[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11330 === (2)))
{var state_11329__$1 = state_11329;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11329__$1,(4),from);
} else
{if((state_val_11330 === (11)))
{var inst_11318 = (state_11329[(2)]);var state_11329__$1 = state_11329;if(cljs.core.truth_(inst_11318))
{var statearr_11338_11360 = state_11329__$1;(statearr_11338_11360[(1)] = (12));
} else
{var statearr_11339_11361 = state_11329__$1;(statearr_11339_11361[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11330 === (9)))
{var state_11329__$1 = state_11329;var statearr_11340_11362 = state_11329__$1;(statearr_11340_11362[(2)] = null);
(statearr_11340_11362[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11330 === (5)))
{var state_11329__$1 = state_11329;if(cljs.core.truth_(close_QMARK_))
{var statearr_11341_11363 = state_11329__$1;(statearr_11341_11363[(1)] = (8));
} else
{var statearr_11342_11364 = state_11329__$1;(statearr_11342_11364[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11330 === (14)))
{var inst_11323 = (state_11329[(2)]);var state_11329__$1 = state_11329;var statearr_11343_11365 = state_11329__$1;(statearr_11343_11365[(2)] = inst_11323);
(statearr_11343_11365[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11330 === (10)))
{var inst_11315 = (state_11329[(2)]);var state_11329__$1 = state_11329;var statearr_11344_11366 = state_11329__$1;(statearr_11344_11366[(2)] = inst_11315);
(statearr_11344_11366[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11330 === (8)))
{var inst_11312 = cljs.core.async.close_BANG_.call(null,to);var state_11329__$1 = state_11329;var statearr_11345_11367 = state_11329__$1;(statearr_11345_11367[(2)] = inst_11312);
(statearr_11345_11367[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6357__auto___11353))
;return ((function (switch__6342__auto__,c__6357__auto___11353){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_11349 = [null,null,null,null,null,null,null,null];(statearr_11349[(0)] = state_machine__6343__auto__);
(statearr_11349[(1)] = (1));
return statearr_11349;
});
var state_machine__6343__auto____1 = (function (state_11329){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_11329);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e11350){if((e11350 instanceof Object))
{var ex__6346__auto__ = e11350;var statearr_11351_11368 = state_11329;(statearr_11351_11368[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11329);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11350;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11369 = state_11329;
state_11329 = G__11369;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_11329){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_11329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto___11353))
})();var state__6359__auto__ = (function (){var statearr_11352 = f__6358__auto__.call(null);(statearr_11352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto___11353);
return statearr_11352;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto___11353))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6357__auto___11470 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto___11470,tc,fc){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto___11470,tc,fc){
return (function (state_11445){var state_val_11446 = (state_11445[(1)]);if((state_val_11446 === (7)))
{var inst_11441 = (state_11445[(2)]);var state_11445__$1 = state_11445;var statearr_11447_11471 = state_11445__$1;(statearr_11447_11471[(2)] = inst_11441);
(statearr_11447_11471[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11446 === (1)))
{var state_11445__$1 = state_11445;var statearr_11448_11472 = state_11445__$1;(statearr_11448_11472[(2)] = null);
(statearr_11448_11472[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11446 === (4)))
{var inst_11422 = (state_11445[(7)]);var inst_11422__$1 = (state_11445[(2)]);var inst_11423 = (inst_11422__$1 == null);var state_11445__$1 = (function (){var statearr_11449 = state_11445;(statearr_11449[(7)] = inst_11422__$1);
return statearr_11449;
})();if(cljs.core.truth_(inst_11423))
{var statearr_11450_11473 = state_11445__$1;(statearr_11450_11473[(1)] = (5));
} else
{var statearr_11451_11474 = state_11445__$1;(statearr_11451_11474[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11446 === (13)))
{var state_11445__$1 = state_11445;var statearr_11452_11475 = state_11445__$1;(statearr_11452_11475[(2)] = null);
(statearr_11452_11475[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11446 === (6)))
{var inst_11422 = (state_11445[(7)]);var inst_11428 = p.call(null,inst_11422);var state_11445__$1 = state_11445;if(cljs.core.truth_(inst_11428))
{var statearr_11453_11476 = state_11445__$1;(statearr_11453_11476[(1)] = (9));
} else
{var statearr_11454_11477 = state_11445__$1;(statearr_11454_11477[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11446 === (3)))
{var inst_11443 = (state_11445[(2)]);var state_11445__$1 = state_11445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11445__$1,inst_11443);
} else
{if((state_val_11446 === (12)))
{var state_11445__$1 = state_11445;var statearr_11455_11478 = state_11445__$1;(statearr_11455_11478[(2)] = null);
(statearr_11455_11478[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11446 === (2)))
{var state_11445__$1 = state_11445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11445__$1,(4),ch);
} else
{if((state_val_11446 === (11)))
{var inst_11422 = (state_11445[(7)]);var inst_11432 = (state_11445[(2)]);var state_11445__$1 = state_11445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11445__$1,(8),inst_11432,inst_11422);
} else
{if((state_val_11446 === (9)))
{var state_11445__$1 = state_11445;var statearr_11456_11479 = state_11445__$1;(statearr_11456_11479[(2)] = tc);
(statearr_11456_11479[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11446 === (5)))
{var inst_11425 = cljs.core.async.close_BANG_.call(null,tc);var inst_11426 = cljs.core.async.close_BANG_.call(null,fc);var state_11445__$1 = (function (){var statearr_11457 = state_11445;(statearr_11457[(8)] = inst_11425);
return statearr_11457;
})();var statearr_11458_11480 = state_11445__$1;(statearr_11458_11480[(2)] = inst_11426);
(statearr_11458_11480[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11446 === (14)))
{var inst_11439 = (state_11445[(2)]);var state_11445__$1 = state_11445;var statearr_11459_11481 = state_11445__$1;(statearr_11459_11481[(2)] = inst_11439);
(statearr_11459_11481[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11446 === (10)))
{var state_11445__$1 = state_11445;var statearr_11460_11482 = state_11445__$1;(statearr_11460_11482[(2)] = fc);
(statearr_11460_11482[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11446 === (8)))
{var inst_11434 = (state_11445[(2)]);var state_11445__$1 = state_11445;if(cljs.core.truth_(inst_11434))
{var statearr_11461_11483 = state_11445__$1;(statearr_11461_11483[(1)] = (12));
} else
{var statearr_11462_11484 = state_11445__$1;(statearr_11462_11484[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6357__auto___11470,tc,fc))
;return ((function (switch__6342__auto__,c__6357__auto___11470,tc,fc){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_11466 = [null,null,null,null,null,null,null,null,null];(statearr_11466[(0)] = state_machine__6343__auto__);
(statearr_11466[(1)] = (1));
return statearr_11466;
});
var state_machine__6343__auto____1 = (function (state_11445){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_11445);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e11467){if((e11467 instanceof Object))
{var ex__6346__auto__ = e11467;var statearr_11468_11485 = state_11445;(statearr_11468_11485[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11445);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11467;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11486 = state_11445;
state_11445 = G__11486;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_11445){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_11445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto___11470,tc,fc))
})();var state__6359__auto__ = (function (){var statearr_11469 = f__6358__auto__.call(null);(statearr_11469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto___11470);
return statearr_11469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto___11470,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6357__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto__){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto__){
return (function (state_11533){var state_val_11534 = (state_11533[(1)]);if((state_val_11534 === (7)))
{var inst_11529 = (state_11533[(2)]);var state_11533__$1 = state_11533;var statearr_11535_11551 = state_11533__$1;(statearr_11535_11551[(2)] = inst_11529);
(statearr_11535_11551[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11534 === (6)))
{var inst_11519 = (state_11533[(7)]);var inst_11522 = (state_11533[(8)]);var inst_11526 = f.call(null,inst_11519,inst_11522);var inst_11519__$1 = inst_11526;var state_11533__$1 = (function (){var statearr_11536 = state_11533;(statearr_11536[(7)] = inst_11519__$1);
return statearr_11536;
})();var statearr_11537_11552 = state_11533__$1;(statearr_11537_11552[(2)] = null);
(statearr_11537_11552[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11534 === (5)))
{var inst_11519 = (state_11533[(7)]);var state_11533__$1 = state_11533;var statearr_11538_11553 = state_11533__$1;(statearr_11538_11553[(2)] = inst_11519);
(statearr_11538_11553[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11534 === (4)))
{var inst_11522 = (state_11533[(8)]);var inst_11522__$1 = (state_11533[(2)]);var inst_11523 = (inst_11522__$1 == null);var state_11533__$1 = (function (){var statearr_11539 = state_11533;(statearr_11539[(8)] = inst_11522__$1);
return statearr_11539;
})();if(cljs.core.truth_(inst_11523))
{var statearr_11540_11554 = state_11533__$1;(statearr_11540_11554[(1)] = (5));
} else
{var statearr_11541_11555 = state_11533__$1;(statearr_11541_11555[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11534 === (3)))
{var inst_11531 = (state_11533[(2)]);var state_11533__$1 = state_11533;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11533__$1,inst_11531);
} else
{if((state_val_11534 === (2)))
{var state_11533__$1 = state_11533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11533__$1,(4),ch);
} else
{if((state_val_11534 === (1)))
{var inst_11519 = init;var state_11533__$1 = (function (){var statearr_11542 = state_11533;(statearr_11542[(7)] = inst_11519);
return statearr_11542;
})();var statearr_11543_11556 = state_11533__$1;(statearr_11543_11556[(2)] = null);
(statearr_11543_11556[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6357__auto__))
;return ((function (switch__6342__auto__,c__6357__auto__){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_11547 = [null,null,null,null,null,null,null,null,null];(statearr_11547[(0)] = state_machine__6343__auto__);
(statearr_11547[(1)] = (1));
return statearr_11547;
});
var state_machine__6343__auto____1 = (function (state_11533){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_11533);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e11548){if((e11548 instanceof Object))
{var ex__6346__auto__ = e11548;var statearr_11549_11557 = state_11533;(statearr_11549_11557[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11533);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11558 = state_11533;
state_11533 = G__11558;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_11533){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_11533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto__))
})();var state__6359__auto__ = (function (){var statearr_11550 = f__6358__auto__.call(null);(statearr_11550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto__);
return statearr_11550;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto__))
);
return c__6357__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6357__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto__){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto__){
return (function (state_11632){var state_val_11633 = (state_11632[(1)]);if((state_val_11633 === (7)))
{var inst_11614 = (state_11632[(2)]);var state_11632__$1 = state_11632;var statearr_11634_11657 = state_11632__$1;(statearr_11634_11657[(2)] = inst_11614);
(statearr_11634_11657[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11633 === (1)))
{var inst_11608 = cljs.core.seq.call(null,coll);var inst_11609 = inst_11608;var state_11632__$1 = (function (){var statearr_11635 = state_11632;(statearr_11635[(7)] = inst_11609);
return statearr_11635;
})();var statearr_11636_11658 = state_11632__$1;(statearr_11636_11658[(2)] = null);
(statearr_11636_11658[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11633 === (4)))
{var inst_11609 = (state_11632[(7)]);var inst_11612 = cljs.core.first.call(null,inst_11609);var state_11632__$1 = state_11632;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11632__$1,(7),ch,inst_11612);
} else
{if((state_val_11633 === (13)))
{var inst_11626 = (state_11632[(2)]);var state_11632__$1 = state_11632;var statearr_11637_11659 = state_11632__$1;(statearr_11637_11659[(2)] = inst_11626);
(statearr_11637_11659[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11633 === (6)))
{var inst_11617 = (state_11632[(2)]);var state_11632__$1 = state_11632;if(cljs.core.truth_(inst_11617))
{var statearr_11638_11660 = state_11632__$1;(statearr_11638_11660[(1)] = (8));
} else
{var statearr_11639_11661 = state_11632__$1;(statearr_11639_11661[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11633 === (3)))
{var inst_11630 = (state_11632[(2)]);var state_11632__$1 = state_11632;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11632__$1,inst_11630);
} else
{if((state_val_11633 === (12)))
{var state_11632__$1 = state_11632;var statearr_11640_11662 = state_11632__$1;(statearr_11640_11662[(2)] = null);
(statearr_11640_11662[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11633 === (2)))
{var inst_11609 = (state_11632[(7)]);var state_11632__$1 = state_11632;if(cljs.core.truth_(inst_11609))
{var statearr_11641_11663 = state_11632__$1;(statearr_11641_11663[(1)] = (4));
} else
{var statearr_11642_11664 = state_11632__$1;(statearr_11642_11664[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11633 === (11)))
{var inst_11623 = cljs.core.async.close_BANG_.call(null,ch);var state_11632__$1 = state_11632;var statearr_11643_11665 = state_11632__$1;(statearr_11643_11665[(2)] = inst_11623);
(statearr_11643_11665[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11633 === (9)))
{var state_11632__$1 = state_11632;if(cljs.core.truth_(close_QMARK_))
{var statearr_11644_11666 = state_11632__$1;(statearr_11644_11666[(1)] = (11));
} else
{var statearr_11645_11667 = state_11632__$1;(statearr_11645_11667[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11633 === (5)))
{var inst_11609 = (state_11632[(7)]);var state_11632__$1 = state_11632;var statearr_11646_11668 = state_11632__$1;(statearr_11646_11668[(2)] = inst_11609);
(statearr_11646_11668[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11633 === (10)))
{var inst_11628 = (state_11632[(2)]);var state_11632__$1 = state_11632;var statearr_11647_11669 = state_11632__$1;(statearr_11647_11669[(2)] = inst_11628);
(statearr_11647_11669[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11633 === (8)))
{var inst_11609 = (state_11632[(7)]);var inst_11619 = cljs.core.next.call(null,inst_11609);var inst_11609__$1 = inst_11619;var state_11632__$1 = (function (){var statearr_11648 = state_11632;(statearr_11648[(7)] = inst_11609__$1);
return statearr_11648;
})();var statearr_11649_11670 = state_11632__$1;(statearr_11649_11670[(2)] = null);
(statearr_11649_11670[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6357__auto__))
;return ((function (switch__6342__auto__,c__6357__auto__){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_11653 = [null,null,null,null,null,null,null,null];(statearr_11653[(0)] = state_machine__6343__auto__);
(statearr_11653[(1)] = (1));
return statearr_11653;
});
var state_machine__6343__auto____1 = (function (state_11632){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_11632);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e11654){if((e11654 instanceof Object))
{var ex__6346__auto__ = e11654;var statearr_11655_11671 = state_11632;(statearr_11655_11671[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11632);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11654;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11672 = state_11632;
state_11632 = G__11672;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_11632){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_11632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto__))
})();var state__6359__auto__ = (function (){var statearr_11656 = f__6358__auto__.call(null);(statearr_11656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto__);
return statearr_11656;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto__))
);
return c__6357__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11674 = {};return obj11674;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3529__auto__ = _;if(and__3529__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4168__auto__ = (((_ == null))?null:_);return (function (){var or__3541__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11676 = {};return obj11676;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11898 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11898 = (function (cs,ch,mult,meta11899){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11899 = meta11899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11898.cljs$lang$type = true;
cljs.core.async.t11898.cljs$lang$ctorStr = "cljs.core.async/t11898";
cljs.core.async.t11898.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t11898");
});})(cs))
;
cljs.core.async.t11898.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11898.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11898.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11898.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11898.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11900){var self__ = this;
var _11900__$1 = this;return self__.meta11899;
});})(cs))
;
cljs.core.async.t11898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11900,meta11899__$1){var self__ = this;
var _11900__$1 = this;return (new cljs.core.async.t11898(self__.cs,self__.ch,self__.mult,meta11899__$1));
});})(cs))
;
cljs.core.async.__GT_t11898 = ((function (cs){
return (function __GT_t11898(cs__$1,ch__$1,mult__$1,meta11899){return (new cljs.core.async.t11898(cs__$1,ch__$1,mult__$1,meta11899));
});})(cs))
;
}
return (new cljs.core.async.t11898(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6357__auto___12119 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto___12119,cs,m,dchan,dctr,done){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto___12119,cs,m,dchan,dctr,done){
return (function (state_12031){var state_val_12032 = (state_12031[(1)]);if((state_val_12032 === (7)))
{var inst_12027 = (state_12031[(2)]);var state_12031__$1 = state_12031;var statearr_12033_12120 = state_12031__$1;(statearr_12033_12120[(2)] = inst_12027);
(statearr_12033_12120[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (20)))
{var inst_11932 = (state_12031[(7)]);var inst_11942 = cljs.core.first.call(null,inst_11932);var inst_11943 = cljs.core.nth.call(null,inst_11942,(0),null);var inst_11944 = cljs.core.nth.call(null,inst_11942,(1),null);var state_12031__$1 = (function (){var statearr_12034 = state_12031;(statearr_12034[(8)] = inst_11943);
return statearr_12034;
})();if(cljs.core.truth_(inst_11944))
{var statearr_12035_12121 = state_12031__$1;(statearr_12035_12121[(1)] = (22));
} else
{var statearr_12036_12122 = state_12031__$1;(statearr_12036_12122[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (27)))
{var inst_11979 = (state_12031[(9)]);var inst_11972 = (state_12031[(10)]);var inst_11903 = (state_12031[(11)]);var inst_11974 = (state_12031[(12)]);var inst_11979__$1 = cljs.core._nth.call(null,inst_11972,inst_11974);var inst_11980 = cljs.core.async.put_BANG_.call(null,inst_11979__$1,inst_11903,done);var state_12031__$1 = (function (){var statearr_12037 = state_12031;(statearr_12037[(9)] = inst_11979__$1);
return statearr_12037;
})();if(cljs.core.truth_(inst_11980))
{var statearr_12038_12123 = state_12031__$1;(statearr_12038_12123[(1)] = (30));
} else
{var statearr_12039_12124 = state_12031__$1;(statearr_12039_12124[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (1)))
{var state_12031__$1 = state_12031;var statearr_12040_12125 = state_12031__$1;(statearr_12040_12125[(2)] = null);
(statearr_12040_12125[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (24)))
{var inst_11932 = (state_12031[(7)]);var inst_11949 = (state_12031[(2)]);var inst_11950 = cljs.core.next.call(null,inst_11932);var inst_11912 = inst_11950;var inst_11913 = null;var inst_11914 = (0);var inst_11915 = (0);var state_12031__$1 = (function (){var statearr_12041 = state_12031;(statearr_12041[(13)] = inst_11949);
(statearr_12041[(14)] = inst_11912);
(statearr_12041[(15)] = inst_11915);
(statearr_12041[(16)] = inst_11914);
(statearr_12041[(17)] = inst_11913);
return statearr_12041;
})();var statearr_12042_12126 = state_12031__$1;(statearr_12042_12126[(2)] = null);
(statearr_12042_12126[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (39)))
{var state_12031__$1 = state_12031;var statearr_12046_12127 = state_12031__$1;(statearr_12046_12127[(2)] = null);
(statearr_12046_12127[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (4)))
{var inst_11903 = (state_12031[(11)]);var inst_11903__$1 = (state_12031[(2)]);var inst_11904 = (inst_11903__$1 == null);var state_12031__$1 = (function (){var statearr_12047 = state_12031;(statearr_12047[(11)] = inst_11903__$1);
return statearr_12047;
})();if(cljs.core.truth_(inst_11904))
{var statearr_12048_12128 = state_12031__$1;(statearr_12048_12128[(1)] = (5));
} else
{var statearr_12049_12129 = state_12031__$1;(statearr_12049_12129[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (15)))
{var inst_11912 = (state_12031[(14)]);var inst_11915 = (state_12031[(15)]);var inst_11914 = (state_12031[(16)]);var inst_11913 = (state_12031[(17)]);var inst_11928 = (state_12031[(2)]);var inst_11929 = (inst_11915 + (1));var tmp12043 = inst_11912;var tmp12044 = inst_11914;var tmp12045 = inst_11913;var inst_11912__$1 = tmp12043;var inst_11913__$1 = tmp12045;var inst_11914__$1 = tmp12044;var inst_11915__$1 = inst_11929;var state_12031__$1 = (function (){var statearr_12050 = state_12031;(statearr_12050[(14)] = inst_11912__$1);
(statearr_12050[(18)] = inst_11928);
(statearr_12050[(15)] = inst_11915__$1);
(statearr_12050[(16)] = inst_11914__$1);
(statearr_12050[(17)] = inst_11913__$1);
return statearr_12050;
})();var statearr_12051_12130 = state_12031__$1;(statearr_12051_12130[(2)] = null);
(statearr_12051_12130[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (21)))
{var inst_11953 = (state_12031[(2)]);var state_12031__$1 = state_12031;var statearr_12055_12131 = state_12031__$1;(statearr_12055_12131[(2)] = inst_11953);
(statearr_12055_12131[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (31)))
{var inst_11979 = (state_12031[(9)]);var inst_11983 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11984 = cljs.core.async.untap_STAR_.call(null,m,inst_11979);var state_12031__$1 = (function (){var statearr_12056 = state_12031;(statearr_12056[(19)] = inst_11983);
return statearr_12056;
})();var statearr_12057_12132 = state_12031__$1;(statearr_12057_12132[(2)] = inst_11984);
(statearr_12057_12132[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (32)))
{var inst_11972 = (state_12031[(10)]);var inst_11971 = (state_12031[(20)]);var inst_11974 = (state_12031[(12)]);var inst_11973 = (state_12031[(21)]);var inst_11986 = (state_12031[(2)]);var inst_11987 = (inst_11974 + (1));var tmp12052 = inst_11972;var tmp12053 = inst_11971;var tmp12054 = inst_11973;var inst_11971__$1 = tmp12053;var inst_11972__$1 = tmp12052;var inst_11973__$1 = tmp12054;var inst_11974__$1 = inst_11987;var state_12031__$1 = (function (){var statearr_12058 = state_12031;(statearr_12058[(10)] = inst_11972__$1);
(statearr_12058[(20)] = inst_11971__$1);
(statearr_12058[(22)] = inst_11986);
(statearr_12058[(12)] = inst_11974__$1);
(statearr_12058[(21)] = inst_11973__$1);
return statearr_12058;
})();var statearr_12059_12133 = state_12031__$1;(statearr_12059_12133[(2)] = null);
(statearr_12059_12133[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (40)))
{var inst_11999 = (state_12031[(23)]);var inst_12003 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12004 = cljs.core.async.untap_STAR_.call(null,m,inst_11999);var state_12031__$1 = (function (){var statearr_12060 = state_12031;(statearr_12060[(24)] = inst_12003);
return statearr_12060;
})();var statearr_12061_12134 = state_12031__$1;(statearr_12061_12134[(2)] = inst_12004);
(statearr_12061_12134[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (33)))
{var inst_11990 = (state_12031[(25)]);var inst_11992 = cljs.core.chunked_seq_QMARK_.call(null,inst_11990);var state_12031__$1 = state_12031;if(inst_11992)
{var statearr_12062_12135 = state_12031__$1;(statearr_12062_12135[(1)] = (36));
} else
{var statearr_12063_12136 = state_12031__$1;(statearr_12063_12136[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (13)))
{var inst_11922 = (state_12031[(26)]);var inst_11925 = cljs.core.async.close_BANG_.call(null,inst_11922);var state_12031__$1 = state_12031;var statearr_12064_12137 = state_12031__$1;(statearr_12064_12137[(2)] = inst_11925);
(statearr_12064_12137[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (22)))
{var inst_11943 = (state_12031[(8)]);var inst_11946 = cljs.core.async.close_BANG_.call(null,inst_11943);var state_12031__$1 = state_12031;var statearr_12065_12138 = state_12031__$1;(statearr_12065_12138[(2)] = inst_11946);
(statearr_12065_12138[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (36)))
{var inst_11990 = (state_12031[(25)]);var inst_11994 = cljs.core.chunk_first.call(null,inst_11990);var inst_11995 = cljs.core.chunk_rest.call(null,inst_11990);var inst_11996 = cljs.core.count.call(null,inst_11994);var inst_11971 = inst_11995;var inst_11972 = inst_11994;var inst_11973 = inst_11996;var inst_11974 = (0);var state_12031__$1 = (function (){var statearr_12066 = state_12031;(statearr_12066[(10)] = inst_11972);
(statearr_12066[(20)] = inst_11971);
(statearr_12066[(12)] = inst_11974);
(statearr_12066[(21)] = inst_11973);
return statearr_12066;
})();var statearr_12067_12139 = state_12031__$1;(statearr_12067_12139[(2)] = null);
(statearr_12067_12139[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (41)))
{var inst_11990 = (state_12031[(25)]);var inst_12006 = (state_12031[(2)]);var inst_12007 = cljs.core.next.call(null,inst_11990);var inst_11971 = inst_12007;var inst_11972 = null;var inst_11973 = (0);var inst_11974 = (0);var state_12031__$1 = (function (){var statearr_12068 = state_12031;(statearr_12068[(10)] = inst_11972);
(statearr_12068[(20)] = inst_11971);
(statearr_12068[(27)] = inst_12006);
(statearr_12068[(12)] = inst_11974);
(statearr_12068[(21)] = inst_11973);
return statearr_12068;
})();var statearr_12069_12140 = state_12031__$1;(statearr_12069_12140[(2)] = null);
(statearr_12069_12140[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (43)))
{var state_12031__$1 = state_12031;var statearr_12070_12141 = state_12031__$1;(statearr_12070_12141[(2)] = null);
(statearr_12070_12141[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (29)))
{var inst_12015 = (state_12031[(2)]);var state_12031__$1 = state_12031;var statearr_12071_12142 = state_12031__$1;(statearr_12071_12142[(2)] = inst_12015);
(statearr_12071_12142[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (44)))
{var inst_12024 = (state_12031[(2)]);var state_12031__$1 = (function (){var statearr_12072 = state_12031;(statearr_12072[(28)] = inst_12024);
return statearr_12072;
})();var statearr_12073_12143 = state_12031__$1;(statearr_12073_12143[(2)] = null);
(statearr_12073_12143[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (6)))
{var inst_11963 = (state_12031[(29)]);var inst_11962 = cljs.core.deref.call(null,cs);var inst_11963__$1 = cljs.core.keys.call(null,inst_11962);var inst_11964 = cljs.core.count.call(null,inst_11963__$1);var inst_11965 = cljs.core.reset_BANG_.call(null,dctr,inst_11964);var inst_11970 = cljs.core.seq.call(null,inst_11963__$1);var inst_11971 = inst_11970;var inst_11972 = null;var inst_11973 = (0);var inst_11974 = (0);var state_12031__$1 = (function (){var statearr_12074 = state_12031;(statearr_12074[(10)] = inst_11972);
(statearr_12074[(20)] = inst_11971);
(statearr_12074[(29)] = inst_11963__$1);
(statearr_12074[(12)] = inst_11974);
(statearr_12074[(21)] = inst_11973);
(statearr_12074[(30)] = inst_11965);
return statearr_12074;
})();var statearr_12075_12144 = state_12031__$1;(statearr_12075_12144[(2)] = null);
(statearr_12075_12144[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (28)))
{var inst_11971 = (state_12031[(20)]);var inst_11990 = (state_12031[(25)]);var inst_11990__$1 = cljs.core.seq.call(null,inst_11971);var state_12031__$1 = (function (){var statearr_12076 = state_12031;(statearr_12076[(25)] = inst_11990__$1);
return statearr_12076;
})();if(inst_11990__$1)
{var statearr_12077_12145 = state_12031__$1;(statearr_12077_12145[(1)] = (33));
} else
{var statearr_12078_12146 = state_12031__$1;(statearr_12078_12146[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (25)))
{var inst_11974 = (state_12031[(12)]);var inst_11973 = (state_12031[(21)]);var inst_11976 = (inst_11974 < inst_11973);var inst_11977 = inst_11976;var state_12031__$1 = state_12031;if(cljs.core.truth_(inst_11977))
{var statearr_12079_12147 = state_12031__$1;(statearr_12079_12147[(1)] = (27));
} else
{var statearr_12080_12148 = state_12031__$1;(statearr_12080_12148[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (34)))
{var state_12031__$1 = state_12031;var statearr_12081_12149 = state_12031__$1;(statearr_12081_12149[(2)] = null);
(statearr_12081_12149[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (17)))
{var state_12031__$1 = state_12031;var statearr_12082_12150 = state_12031__$1;(statearr_12082_12150[(2)] = null);
(statearr_12082_12150[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (3)))
{var inst_12029 = (state_12031[(2)]);var state_12031__$1 = state_12031;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12031__$1,inst_12029);
} else
{if((state_val_12032 === (12)))
{var inst_11958 = (state_12031[(2)]);var state_12031__$1 = state_12031;var statearr_12083_12151 = state_12031__$1;(statearr_12083_12151[(2)] = inst_11958);
(statearr_12083_12151[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (2)))
{var state_12031__$1 = state_12031;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12031__$1,(4),ch);
} else
{if((state_val_12032 === (23)))
{var state_12031__$1 = state_12031;var statearr_12084_12152 = state_12031__$1;(statearr_12084_12152[(2)] = null);
(statearr_12084_12152[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (35)))
{var inst_12013 = (state_12031[(2)]);var state_12031__$1 = state_12031;var statearr_12085_12153 = state_12031__$1;(statearr_12085_12153[(2)] = inst_12013);
(statearr_12085_12153[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (19)))
{var inst_11932 = (state_12031[(7)]);var inst_11936 = cljs.core.chunk_first.call(null,inst_11932);var inst_11937 = cljs.core.chunk_rest.call(null,inst_11932);var inst_11938 = cljs.core.count.call(null,inst_11936);var inst_11912 = inst_11937;var inst_11913 = inst_11936;var inst_11914 = inst_11938;var inst_11915 = (0);var state_12031__$1 = (function (){var statearr_12086 = state_12031;(statearr_12086[(14)] = inst_11912);
(statearr_12086[(15)] = inst_11915);
(statearr_12086[(16)] = inst_11914);
(statearr_12086[(17)] = inst_11913);
return statearr_12086;
})();var statearr_12087_12154 = state_12031__$1;(statearr_12087_12154[(2)] = null);
(statearr_12087_12154[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (11)))
{var inst_11932 = (state_12031[(7)]);var inst_11912 = (state_12031[(14)]);var inst_11932__$1 = cljs.core.seq.call(null,inst_11912);var state_12031__$1 = (function (){var statearr_12088 = state_12031;(statearr_12088[(7)] = inst_11932__$1);
return statearr_12088;
})();if(inst_11932__$1)
{var statearr_12089_12155 = state_12031__$1;(statearr_12089_12155[(1)] = (16));
} else
{var statearr_12090_12156 = state_12031__$1;(statearr_12090_12156[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (9)))
{var inst_11960 = (state_12031[(2)]);var state_12031__$1 = state_12031;var statearr_12091_12157 = state_12031__$1;(statearr_12091_12157[(2)] = inst_11960);
(statearr_12091_12157[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (5)))
{var inst_11910 = cljs.core.deref.call(null,cs);var inst_11911 = cljs.core.seq.call(null,inst_11910);var inst_11912 = inst_11911;var inst_11913 = null;var inst_11914 = (0);var inst_11915 = (0);var state_12031__$1 = (function (){var statearr_12092 = state_12031;(statearr_12092[(14)] = inst_11912);
(statearr_12092[(15)] = inst_11915);
(statearr_12092[(16)] = inst_11914);
(statearr_12092[(17)] = inst_11913);
return statearr_12092;
})();var statearr_12093_12158 = state_12031__$1;(statearr_12093_12158[(2)] = null);
(statearr_12093_12158[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (14)))
{var state_12031__$1 = state_12031;var statearr_12094_12159 = state_12031__$1;(statearr_12094_12159[(2)] = null);
(statearr_12094_12159[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (45)))
{var inst_12021 = (state_12031[(2)]);var state_12031__$1 = state_12031;var statearr_12095_12160 = state_12031__$1;(statearr_12095_12160[(2)] = inst_12021);
(statearr_12095_12160[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (26)))
{var inst_11963 = (state_12031[(29)]);var inst_12017 = (state_12031[(2)]);var inst_12018 = cljs.core.seq.call(null,inst_11963);var state_12031__$1 = (function (){var statearr_12096 = state_12031;(statearr_12096[(31)] = inst_12017);
return statearr_12096;
})();if(inst_12018)
{var statearr_12097_12161 = state_12031__$1;(statearr_12097_12161[(1)] = (42));
} else
{var statearr_12098_12162 = state_12031__$1;(statearr_12098_12162[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (16)))
{var inst_11932 = (state_12031[(7)]);var inst_11934 = cljs.core.chunked_seq_QMARK_.call(null,inst_11932);var state_12031__$1 = state_12031;if(inst_11934)
{var statearr_12099_12163 = state_12031__$1;(statearr_12099_12163[(1)] = (19));
} else
{var statearr_12100_12164 = state_12031__$1;(statearr_12100_12164[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (38)))
{var inst_12010 = (state_12031[(2)]);var state_12031__$1 = state_12031;var statearr_12101_12165 = state_12031__$1;(statearr_12101_12165[(2)] = inst_12010);
(statearr_12101_12165[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (30)))
{var state_12031__$1 = state_12031;var statearr_12102_12166 = state_12031__$1;(statearr_12102_12166[(2)] = null);
(statearr_12102_12166[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (10)))
{var inst_11915 = (state_12031[(15)]);var inst_11913 = (state_12031[(17)]);var inst_11921 = cljs.core._nth.call(null,inst_11913,inst_11915);var inst_11922 = cljs.core.nth.call(null,inst_11921,(0),null);var inst_11923 = cljs.core.nth.call(null,inst_11921,(1),null);var state_12031__$1 = (function (){var statearr_12103 = state_12031;(statearr_12103[(26)] = inst_11922);
return statearr_12103;
})();if(cljs.core.truth_(inst_11923))
{var statearr_12104_12167 = state_12031__$1;(statearr_12104_12167[(1)] = (13));
} else
{var statearr_12105_12168 = state_12031__$1;(statearr_12105_12168[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (18)))
{var inst_11956 = (state_12031[(2)]);var state_12031__$1 = state_12031;var statearr_12106_12169 = state_12031__$1;(statearr_12106_12169[(2)] = inst_11956);
(statearr_12106_12169[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (42)))
{var state_12031__$1 = state_12031;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12031__$1,(45),dchan);
} else
{if((state_val_12032 === (37)))
{var inst_11903 = (state_12031[(11)]);var inst_11999 = (state_12031[(23)]);var inst_11990 = (state_12031[(25)]);var inst_11999__$1 = cljs.core.first.call(null,inst_11990);var inst_12000 = cljs.core.async.put_BANG_.call(null,inst_11999__$1,inst_11903,done);var state_12031__$1 = (function (){var statearr_12107 = state_12031;(statearr_12107[(23)] = inst_11999__$1);
return statearr_12107;
})();if(cljs.core.truth_(inst_12000))
{var statearr_12108_12170 = state_12031__$1;(statearr_12108_12170[(1)] = (39));
} else
{var statearr_12109_12171 = state_12031__$1;(statearr_12109_12171[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12032 === (8)))
{var inst_11915 = (state_12031[(15)]);var inst_11914 = (state_12031[(16)]);var inst_11917 = (inst_11915 < inst_11914);var inst_11918 = inst_11917;var state_12031__$1 = state_12031;if(cljs.core.truth_(inst_11918))
{var statearr_12110_12172 = state_12031__$1;(statearr_12110_12172[(1)] = (10));
} else
{var statearr_12111_12173 = state_12031__$1;(statearr_12111_12173[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6357__auto___12119,cs,m,dchan,dctr,done))
;return ((function (switch__6342__auto__,c__6357__auto___12119,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_12115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12115[(0)] = state_machine__6343__auto__);
(statearr_12115[(1)] = (1));
return statearr_12115;
});
var state_machine__6343__auto____1 = (function (state_12031){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_12031);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e12116){if((e12116 instanceof Object))
{var ex__6346__auto__ = e12116;var statearr_12117_12174 = state_12031;(statearr_12117_12174[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12031);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12175 = state_12031;
state_12031 = G__12175;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_12031){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_12031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto___12119,cs,m,dchan,dctr,done))
})();var state__6359__auto__ = (function (){var statearr_12118 = f__6358__auto__.call(null);(statearr_12118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto___12119);
return statearr_12118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto___12119,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12177 = {};return obj12177;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12297 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12297 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12298){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12298 = meta12298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12297.cljs$lang$type = true;
cljs.core.async.t12297.cljs$lang$ctorStr = "cljs.core.async/t12297";
cljs.core.async.t12297.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t12297");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12297.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12297.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12297.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12297.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12297.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12297.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12297.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12297.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12299){var self__ = this;
var _12299__$1 = this;return self__.meta12298;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12299,meta12298__$1){var self__ = this;
var _12299__$1 = this;return (new cljs.core.async.t12297(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12298__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12297 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12297(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12298){return (new cljs.core.async.t12297(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12298));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12297(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6357__auto___12416 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto___12416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto___12416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12369){var state_val_12370 = (state_12369[(1)]);if((state_val_12370 === (7)))
{var inst_12313 = (state_12369[(7)]);var inst_12318 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12313);var state_12369__$1 = state_12369;var statearr_12371_12417 = state_12369__$1;(statearr_12371_12417[(2)] = inst_12318);
(statearr_12371_12417[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (20)))
{var inst_12328 = (state_12369[(8)]);var state_12369__$1 = state_12369;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12369__$1,(23),out,inst_12328);
} else
{if((state_val_12370 === (1)))
{var inst_12303 = (state_12369[(9)]);var inst_12303__$1 = calc_state.call(null);var inst_12304 = cljs.core.seq_QMARK_.call(null,inst_12303__$1);var state_12369__$1 = (function (){var statearr_12372 = state_12369;(statearr_12372[(9)] = inst_12303__$1);
return statearr_12372;
})();if(inst_12304)
{var statearr_12373_12418 = state_12369__$1;(statearr_12373_12418[(1)] = (2));
} else
{var statearr_12374_12419 = state_12369__$1;(statearr_12374_12419[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (24)))
{var inst_12321 = (state_12369[(10)]);var inst_12313 = inst_12321;var state_12369__$1 = (function (){var statearr_12375 = state_12369;(statearr_12375[(7)] = inst_12313);
return statearr_12375;
})();var statearr_12376_12420 = state_12369__$1;(statearr_12376_12420[(2)] = null);
(statearr_12376_12420[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (4)))
{var inst_12303 = (state_12369[(9)]);var inst_12309 = (state_12369[(2)]);var inst_12310 = cljs.core.get.call(null,inst_12309,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12311 = cljs.core.get.call(null,inst_12309,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12312 = cljs.core.get.call(null,inst_12309,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12313 = inst_12303;var state_12369__$1 = (function (){var statearr_12377 = state_12369;(statearr_12377[(11)] = inst_12312);
(statearr_12377[(12)] = inst_12311);
(statearr_12377[(13)] = inst_12310);
(statearr_12377[(7)] = inst_12313);
return statearr_12377;
})();var statearr_12378_12421 = state_12369__$1;(statearr_12378_12421[(2)] = null);
(statearr_12378_12421[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (15)))
{var state_12369__$1 = state_12369;var statearr_12379_12422 = state_12369__$1;(statearr_12379_12422[(2)] = null);
(statearr_12379_12422[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (21)))
{var inst_12321 = (state_12369[(10)]);var inst_12313 = inst_12321;var state_12369__$1 = (function (){var statearr_12380 = state_12369;(statearr_12380[(7)] = inst_12313);
return statearr_12380;
})();var statearr_12381_12423 = state_12369__$1;(statearr_12381_12423[(2)] = null);
(statearr_12381_12423[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (13)))
{var inst_12365 = (state_12369[(2)]);var state_12369__$1 = state_12369;var statearr_12382_12424 = state_12369__$1;(statearr_12382_12424[(2)] = inst_12365);
(statearr_12382_12424[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (22)))
{var inst_12363 = (state_12369[(2)]);var state_12369__$1 = state_12369;var statearr_12383_12425 = state_12369__$1;(statearr_12383_12425[(2)] = inst_12363);
(statearr_12383_12425[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (6)))
{var inst_12367 = (state_12369[(2)]);var state_12369__$1 = state_12369;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12369__$1,inst_12367);
} else
{if((state_val_12370 === (25)))
{var state_12369__$1 = state_12369;var statearr_12384_12426 = state_12369__$1;(statearr_12384_12426[(2)] = null);
(statearr_12384_12426[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (17)))
{var inst_12343 = (state_12369[(14)]);var state_12369__$1 = state_12369;var statearr_12385_12427 = state_12369__$1;(statearr_12385_12427[(2)] = inst_12343);
(statearr_12385_12427[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (3)))
{var inst_12303 = (state_12369[(9)]);var state_12369__$1 = state_12369;var statearr_12386_12428 = state_12369__$1;(statearr_12386_12428[(2)] = inst_12303);
(statearr_12386_12428[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (12)))
{var inst_12329 = (state_12369[(15)]);var inst_12343 = (state_12369[(14)]);var inst_12324 = (state_12369[(16)]);var inst_12343__$1 = inst_12324.call(null,inst_12329);var state_12369__$1 = (function (){var statearr_12387 = state_12369;(statearr_12387[(14)] = inst_12343__$1);
return statearr_12387;
})();if(cljs.core.truth_(inst_12343__$1))
{var statearr_12388_12429 = state_12369__$1;(statearr_12388_12429[(1)] = (17));
} else
{var statearr_12389_12430 = state_12369__$1;(statearr_12389_12430[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (2)))
{var inst_12303 = (state_12369[(9)]);var inst_12306 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12303);var state_12369__$1 = state_12369;var statearr_12390_12431 = state_12369__$1;(statearr_12390_12431[(2)] = inst_12306);
(statearr_12390_12431[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (23)))
{var inst_12354 = (state_12369[(2)]);var state_12369__$1 = state_12369;if(cljs.core.truth_(inst_12354))
{var statearr_12391_12432 = state_12369__$1;(statearr_12391_12432[(1)] = (24));
} else
{var statearr_12392_12433 = state_12369__$1;(statearr_12392_12433[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (19)))
{var inst_12351 = (state_12369[(2)]);var state_12369__$1 = state_12369;if(cljs.core.truth_(inst_12351))
{var statearr_12393_12434 = state_12369__$1;(statearr_12393_12434[(1)] = (20));
} else
{var statearr_12394_12435 = state_12369__$1;(statearr_12394_12435[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (11)))
{var inst_12328 = (state_12369[(8)]);var inst_12334 = (inst_12328 == null);var state_12369__$1 = state_12369;if(cljs.core.truth_(inst_12334))
{var statearr_12395_12436 = state_12369__$1;(statearr_12395_12436[(1)] = (14));
} else
{var statearr_12396_12437 = state_12369__$1;(statearr_12396_12437[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (9)))
{var inst_12321 = (state_12369[(10)]);var inst_12321__$1 = (state_12369[(2)]);var inst_12322 = cljs.core.get.call(null,inst_12321__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12323 = cljs.core.get.call(null,inst_12321__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12324 = cljs.core.get.call(null,inst_12321__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12369__$1 = (function (){var statearr_12397 = state_12369;(statearr_12397[(16)] = inst_12324);
(statearr_12397[(10)] = inst_12321__$1);
(statearr_12397[(17)] = inst_12323);
return statearr_12397;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12369__$1,(10),inst_12322);
} else
{if((state_val_12370 === (5)))
{var inst_12313 = (state_12369[(7)]);var inst_12316 = cljs.core.seq_QMARK_.call(null,inst_12313);var state_12369__$1 = state_12369;if(inst_12316)
{var statearr_12398_12438 = state_12369__$1;(statearr_12398_12438[(1)] = (7));
} else
{var statearr_12399_12439 = state_12369__$1;(statearr_12399_12439[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (14)))
{var inst_12329 = (state_12369[(15)]);var inst_12336 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12329);var state_12369__$1 = state_12369;var statearr_12400_12440 = state_12369__$1;(statearr_12400_12440[(2)] = inst_12336);
(statearr_12400_12440[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (26)))
{var inst_12359 = (state_12369[(2)]);var state_12369__$1 = state_12369;var statearr_12401_12441 = state_12369__$1;(statearr_12401_12441[(2)] = inst_12359);
(statearr_12401_12441[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (16)))
{var inst_12339 = (state_12369[(2)]);var inst_12340 = calc_state.call(null);var inst_12313 = inst_12340;var state_12369__$1 = (function (){var statearr_12402 = state_12369;(statearr_12402[(18)] = inst_12339);
(statearr_12402[(7)] = inst_12313);
return statearr_12402;
})();var statearr_12403_12442 = state_12369__$1;(statearr_12403_12442[(2)] = null);
(statearr_12403_12442[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (10)))
{var inst_12329 = (state_12369[(15)]);var inst_12328 = (state_12369[(8)]);var inst_12327 = (state_12369[(2)]);var inst_12328__$1 = cljs.core.nth.call(null,inst_12327,(0),null);var inst_12329__$1 = cljs.core.nth.call(null,inst_12327,(1),null);var inst_12330 = (inst_12328__$1 == null);var inst_12331 = cljs.core._EQ_.call(null,inst_12329__$1,change);var inst_12332 = (inst_12330) || (inst_12331);var state_12369__$1 = (function (){var statearr_12404 = state_12369;(statearr_12404[(15)] = inst_12329__$1);
(statearr_12404[(8)] = inst_12328__$1);
return statearr_12404;
})();if(cljs.core.truth_(inst_12332))
{var statearr_12405_12443 = state_12369__$1;(statearr_12405_12443[(1)] = (11));
} else
{var statearr_12406_12444 = state_12369__$1;(statearr_12406_12444[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (18)))
{var inst_12329 = (state_12369[(15)]);var inst_12324 = (state_12369[(16)]);var inst_12323 = (state_12369[(17)]);var inst_12346 = cljs.core.empty_QMARK_.call(null,inst_12324);var inst_12347 = inst_12323.call(null,inst_12329);var inst_12348 = cljs.core.not.call(null,inst_12347);var inst_12349 = (inst_12346) && (inst_12348);var state_12369__$1 = state_12369;var statearr_12407_12445 = state_12369__$1;(statearr_12407_12445[(2)] = inst_12349);
(statearr_12407_12445[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12370 === (8)))
{var inst_12313 = (state_12369[(7)]);var state_12369__$1 = state_12369;var statearr_12408_12446 = state_12369__$1;(statearr_12408_12446[(2)] = inst_12313);
(statearr_12408_12446[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6357__auto___12416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6342__auto__,c__6357__auto___12416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_12412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12412[(0)] = state_machine__6343__auto__);
(statearr_12412[(1)] = (1));
return statearr_12412;
});
var state_machine__6343__auto____1 = (function (state_12369){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_12369);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e12413){if((e12413 instanceof Object))
{var ex__6346__auto__ = e12413;var statearr_12414_12447 = state_12369;(statearr_12414_12447[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12369);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12413;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12448 = state_12369;
state_12369 = G__12448;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_12369){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_12369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto___12416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6359__auto__ = (function (){var statearr_12415 = f__6358__auto__.call(null);(statearr_12415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto___12416);
return statearr_12415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto___12416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12450 = {};return obj12450;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3541__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3541__auto__,mults){
return (function (p1__12451_SHARP_){if(cljs.core.truth_(p1__12451_SHARP_.call(null,topic)))
{return p1__12451_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12451_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3541__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12574 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12574 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12575){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12575 = meta12575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12574.cljs$lang$type = true;
cljs.core.async.t12574.cljs$lang$ctorStr = "cljs.core.async/t12574";
cljs.core.async.t12574.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t12574");
});})(mults,ensure_mult))
;
cljs.core.async.t12574.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12574.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12574.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12574.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12574.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12574.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12574.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12576){var self__ = this;
var _12576__$1 = this;return self__.meta12575;
});})(mults,ensure_mult))
;
cljs.core.async.t12574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12576,meta12575__$1){var self__ = this;
var _12576__$1 = this;return (new cljs.core.async.t12574(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12575__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12574 = ((function (mults,ensure_mult){
return (function __GT_t12574(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12575){return (new cljs.core.async.t12574(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12575));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12574(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6357__auto___12696 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto___12696,mults,ensure_mult,p){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto___12696,mults,ensure_mult,p){
return (function (state_12648){var state_val_12649 = (state_12648[(1)]);if((state_val_12649 === (7)))
{var inst_12644 = (state_12648[(2)]);var state_12648__$1 = state_12648;var statearr_12650_12697 = state_12648__$1;(statearr_12650_12697[(2)] = inst_12644);
(statearr_12650_12697[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (20)))
{var state_12648__$1 = state_12648;var statearr_12651_12698 = state_12648__$1;(statearr_12651_12698[(2)] = null);
(statearr_12651_12698[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (1)))
{var state_12648__$1 = state_12648;var statearr_12652_12699 = state_12648__$1;(statearr_12652_12699[(2)] = null);
(statearr_12652_12699[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (24)))
{var inst_12627 = (state_12648[(7)]);var inst_12636 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12627);var state_12648__$1 = state_12648;var statearr_12653_12700 = state_12648__$1;(statearr_12653_12700[(2)] = inst_12636);
(statearr_12653_12700[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (4)))
{var inst_12579 = (state_12648[(8)]);var inst_12579__$1 = (state_12648[(2)]);var inst_12580 = (inst_12579__$1 == null);var state_12648__$1 = (function (){var statearr_12654 = state_12648;(statearr_12654[(8)] = inst_12579__$1);
return statearr_12654;
})();if(cljs.core.truth_(inst_12580))
{var statearr_12655_12701 = state_12648__$1;(statearr_12655_12701[(1)] = (5));
} else
{var statearr_12656_12702 = state_12648__$1;(statearr_12656_12702[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (15)))
{var inst_12621 = (state_12648[(2)]);var state_12648__$1 = state_12648;var statearr_12657_12703 = state_12648__$1;(statearr_12657_12703[(2)] = inst_12621);
(statearr_12657_12703[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (21)))
{var inst_12641 = (state_12648[(2)]);var state_12648__$1 = (function (){var statearr_12658 = state_12648;(statearr_12658[(9)] = inst_12641);
return statearr_12658;
})();var statearr_12659_12704 = state_12648__$1;(statearr_12659_12704[(2)] = null);
(statearr_12659_12704[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (13)))
{var inst_12603 = (state_12648[(10)]);var inst_12605 = cljs.core.chunked_seq_QMARK_.call(null,inst_12603);var state_12648__$1 = state_12648;if(inst_12605)
{var statearr_12660_12705 = state_12648__$1;(statearr_12660_12705[(1)] = (16));
} else
{var statearr_12661_12706 = state_12648__$1;(statearr_12661_12706[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (22)))
{var inst_12633 = (state_12648[(2)]);var state_12648__$1 = state_12648;if(cljs.core.truth_(inst_12633))
{var statearr_12662_12707 = state_12648__$1;(statearr_12662_12707[(1)] = (23));
} else
{var statearr_12663_12708 = state_12648__$1;(statearr_12663_12708[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (6)))
{var inst_12579 = (state_12648[(8)]);var inst_12627 = (state_12648[(7)]);var inst_12629 = (state_12648[(11)]);var inst_12627__$1 = topic_fn.call(null,inst_12579);var inst_12628 = cljs.core.deref.call(null,mults);var inst_12629__$1 = cljs.core.get.call(null,inst_12628,inst_12627__$1);var state_12648__$1 = (function (){var statearr_12664 = state_12648;(statearr_12664[(7)] = inst_12627__$1);
(statearr_12664[(11)] = inst_12629__$1);
return statearr_12664;
})();if(cljs.core.truth_(inst_12629__$1))
{var statearr_12665_12709 = state_12648__$1;(statearr_12665_12709[(1)] = (19));
} else
{var statearr_12666_12710 = state_12648__$1;(statearr_12666_12710[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (25)))
{var inst_12638 = (state_12648[(2)]);var state_12648__$1 = state_12648;var statearr_12667_12711 = state_12648__$1;(statearr_12667_12711[(2)] = inst_12638);
(statearr_12667_12711[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (17)))
{var inst_12603 = (state_12648[(10)]);var inst_12612 = cljs.core.first.call(null,inst_12603);var inst_12613 = cljs.core.async.muxch_STAR_.call(null,inst_12612);var inst_12614 = cljs.core.async.close_BANG_.call(null,inst_12613);var inst_12615 = cljs.core.next.call(null,inst_12603);var inst_12589 = inst_12615;var inst_12590 = null;var inst_12591 = (0);var inst_12592 = (0);var state_12648__$1 = (function (){var statearr_12668 = state_12648;(statearr_12668[(12)] = inst_12591);
(statearr_12668[(13)] = inst_12614);
(statearr_12668[(14)] = inst_12590);
(statearr_12668[(15)] = inst_12592);
(statearr_12668[(16)] = inst_12589);
return statearr_12668;
})();var statearr_12669_12712 = state_12648__$1;(statearr_12669_12712[(2)] = null);
(statearr_12669_12712[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (3)))
{var inst_12646 = (state_12648[(2)]);var state_12648__$1 = state_12648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12648__$1,inst_12646);
} else
{if((state_val_12649 === (12)))
{var inst_12623 = (state_12648[(2)]);var state_12648__$1 = state_12648;var statearr_12670_12713 = state_12648__$1;(statearr_12670_12713[(2)] = inst_12623);
(statearr_12670_12713[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (2)))
{var state_12648__$1 = state_12648;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12648__$1,(4),ch);
} else
{if((state_val_12649 === (23)))
{var state_12648__$1 = state_12648;var statearr_12671_12714 = state_12648__$1;(statearr_12671_12714[(2)] = null);
(statearr_12671_12714[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (19)))
{var inst_12579 = (state_12648[(8)]);var inst_12629 = (state_12648[(11)]);var inst_12631 = cljs.core.async.muxch_STAR_.call(null,inst_12629);var state_12648__$1 = state_12648;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12648__$1,(22),inst_12631,inst_12579);
} else
{if((state_val_12649 === (11)))
{var inst_12603 = (state_12648[(10)]);var inst_12589 = (state_12648[(16)]);var inst_12603__$1 = cljs.core.seq.call(null,inst_12589);var state_12648__$1 = (function (){var statearr_12672 = state_12648;(statearr_12672[(10)] = inst_12603__$1);
return statearr_12672;
})();if(inst_12603__$1)
{var statearr_12673_12715 = state_12648__$1;(statearr_12673_12715[(1)] = (13));
} else
{var statearr_12674_12716 = state_12648__$1;(statearr_12674_12716[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (9)))
{var inst_12625 = (state_12648[(2)]);var state_12648__$1 = state_12648;var statearr_12675_12717 = state_12648__$1;(statearr_12675_12717[(2)] = inst_12625);
(statearr_12675_12717[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (5)))
{var inst_12586 = cljs.core.deref.call(null,mults);var inst_12587 = cljs.core.vals.call(null,inst_12586);var inst_12588 = cljs.core.seq.call(null,inst_12587);var inst_12589 = inst_12588;var inst_12590 = null;var inst_12591 = (0);var inst_12592 = (0);var state_12648__$1 = (function (){var statearr_12676 = state_12648;(statearr_12676[(12)] = inst_12591);
(statearr_12676[(14)] = inst_12590);
(statearr_12676[(15)] = inst_12592);
(statearr_12676[(16)] = inst_12589);
return statearr_12676;
})();var statearr_12677_12718 = state_12648__$1;(statearr_12677_12718[(2)] = null);
(statearr_12677_12718[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (14)))
{var state_12648__$1 = state_12648;var statearr_12681_12719 = state_12648__$1;(statearr_12681_12719[(2)] = null);
(statearr_12681_12719[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (16)))
{var inst_12603 = (state_12648[(10)]);var inst_12607 = cljs.core.chunk_first.call(null,inst_12603);var inst_12608 = cljs.core.chunk_rest.call(null,inst_12603);var inst_12609 = cljs.core.count.call(null,inst_12607);var inst_12589 = inst_12608;var inst_12590 = inst_12607;var inst_12591 = inst_12609;var inst_12592 = (0);var state_12648__$1 = (function (){var statearr_12682 = state_12648;(statearr_12682[(12)] = inst_12591);
(statearr_12682[(14)] = inst_12590);
(statearr_12682[(15)] = inst_12592);
(statearr_12682[(16)] = inst_12589);
return statearr_12682;
})();var statearr_12683_12720 = state_12648__$1;(statearr_12683_12720[(2)] = null);
(statearr_12683_12720[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (10)))
{var inst_12591 = (state_12648[(12)]);var inst_12590 = (state_12648[(14)]);var inst_12592 = (state_12648[(15)]);var inst_12589 = (state_12648[(16)]);var inst_12597 = cljs.core._nth.call(null,inst_12590,inst_12592);var inst_12598 = cljs.core.async.muxch_STAR_.call(null,inst_12597);var inst_12599 = cljs.core.async.close_BANG_.call(null,inst_12598);var inst_12600 = (inst_12592 + (1));var tmp12678 = inst_12591;var tmp12679 = inst_12590;var tmp12680 = inst_12589;var inst_12589__$1 = tmp12680;var inst_12590__$1 = tmp12679;var inst_12591__$1 = tmp12678;var inst_12592__$1 = inst_12600;var state_12648__$1 = (function (){var statearr_12684 = state_12648;(statearr_12684[(12)] = inst_12591__$1);
(statearr_12684[(14)] = inst_12590__$1);
(statearr_12684[(17)] = inst_12599);
(statearr_12684[(15)] = inst_12592__$1);
(statearr_12684[(16)] = inst_12589__$1);
return statearr_12684;
})();var statearr_12685_12721 = state_12648__$1;(statearr_12685_12721[(2)] = null);
(statearr_12685_12721[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (18)))
{var inst_12618 = (state_12648[(2)]);var state_12648__$1 = state_12648;var statearr_12686_12722 = state_12648__$1;(statearr_12686_12722[(2)] = inst_12618);
(statearr_12686_12722[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (8)))
{var inst_12591 = (state_12648[(12)]);var inst_12592 = (state_12648[(15)]);var inst_12594 = (inst_12592 < inst_12591);var inst_12595 = inst_12594;var state_12648__$1 = state_12648;if(cljs.core.truth_(inst_12595))
{var statearr_12687_12723 = state_12648__$1;(statearr_12687_12723[(1)] = (10));
} else
{var statearr_12688_12724 = state_12648__$1;(statearr_12688_12724[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6357__auto___12696,mults,ensure_mult,p))
;return ((function (switch__6342__auto__,c__6357__auto___12696,mults,ensure_mult,p){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_12692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12692[(0)] = state_machine__6343__auto__);
(statearr_12692[(1)] = (1));
return statearr_12692;
});
var state_machine__6343__auto____1 = (function (state_12648){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_12648);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e12693){if((e12693 instanceof Object))
{var ex__6346__auto__ = e12693;var statearr_12694_12725 = state_12648;(statearr_12694_12725[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12648);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12726 = state_12648;
state_12648 = G__12726;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_12648){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_12648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto___12696,mults,ensure_mult,p))
})();var state__6359__auto__ = (function (){var statearr_12695 = f__6358__auto__.call(null);(statearr_12695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto___12696);
return statearr_12695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto___12696,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6357__auto___12863 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto___12863,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto___12863,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12833){var state_val_12834 = (state_12833[(1)]);if((state_val_12834 === (7)))
{var state_12833__$1 = state_12833;var statearr_12835_12864 = state_12833__$1;(statearr_12835_12864[(2)] = null);
(statearr_12835_12864[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (1)))
{var state_12833__$1 = state_12833;var statearr_12836_12865 = state_12833__$1;(statearr_12836_12865[(2)] = null);
(statearr_12836_12865[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (4)))
{var inst_12797 = (state_12833[(7)]);var inst_12799 = (inst_12797 < cnt);var state_12833__$1 = state_12833;if(cljs.core.truth_(inst_12799))
{var statearr_12837_12866 = state_12833__$1;(statearr_12837_12866[(1)] = (6));
} else
{var statearr_12838_12867 = state_12833__$1;(statearr_12838_12867[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (15)))
{var inst_12829 = (state_12833[(2)]);var state_12833__$1 = state_12833;var statearr_12839_12868 = state_12833__$1;(statearr_12839_12868[(2)] = inst_12829);
(statearr_12839_12868[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (13)))
{var inst_12822 = cljs.core.async.close_BANG_.call(null,out);var state_12833__$1 = state_12833;var statearr_12840_12869 = state_12833__$1;(statearr_12840_12869[(2)] = inst_12822);
(statearr_12840_12869[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (6)))
{var state_12833__$1 = state_12833;var statearr_12841_12870 = state_12833__$1;(statearr_12841_12870[(2)] = null);
(statearr_12841_12870[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (3)))
{var inst_12831 = (state_12833[(2)]);var state_12833__$1 = state_12833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12833__$1,inst_12831);
} else
{if((state_val_12834 === (12)))
{var inst_12819 = (state_12833[(8)]);var inst_12819__$1 = (state_12833[(2)]);var inst_12820 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12819__$1);var state_12833__$1 = (function (){var statearr_12842 = state_12833;(statearr_12842[(8)] = inst_12819__$1);
return statearr_12842;
})();if(cljs.core.truth_(inst_12820))
{var statearr_12843_12871 = state_12833__$1;(statearr_12843_12871[(1)] = (13));
} else
{var statearr_12844_12872 = state_12833__$1;(statearr_12844_12872[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (2)))
{var inst_12796 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12797 = (0);var state_12833__$1 = (function (){var statearr_12845 = state_12833;(statearr_12845[(9)] = inst_12796);
(statearr_12845[(7)] = inst_12797);
return statearr_12845;
})();var statearr_12846_12873 = state_12833__$1;(statearr_12846_12873[(2)] = null);
(statearr_12846_12873[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (11)))
{var inst_12797 = (state_12833[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12833,(10),Object,null,(9));var inst_12806 = chs__$1.call(null,inst_12797);var inst_12807 = done.call(null,inst_12797);var inst_12808 = cljs.core.async.take_BANG_.call(null,inst_12806,inst_12807);var state_12833__$1 = state_12833;var statearr_12847_12874 = state_12833__$1;(statearr_12847_12874[(2)] = inst_12808);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12833__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (9)))
{var inst_12797 = (state_12833[(7)]);var inst_12810 = (state_12833[(2)]);var inst_12811 = (inst_12797 + (1));var inst_12797__$1 = inst_12811;var state_12833__$1 = (function (){var statearr_12848 = state_12833;(statearr_12848[(7)] = inst_12797__$1);
(statearr_12848[(10)] = inst_12810);
return statearr_12848;
})();var statearr_12849_12875 = state_12833__$1;(statearr_12849_12875[(2)] = null);
(statearr_12849_12875[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (5)))
{var inst_12817 = (state_12833[(2)]);var state_12833__$1 = (function (){var statearr_12850 = state_12833;(statearr_12850[(11)] = inst_12817);
return statearr_12850;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12833__$1,(12),dchan);
} else
{if((state_val_12834 === (14)))
{var inst_12819 = (state_12833[(8)]);var inst_12824 = cljs.core.apply.call(null,f,inst_12819);var state_12833__$1 = state_12833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12833__$1,(16),out,inst_12824);
} else
{if((state_val_12834 === (16)))
{var inst_12826 = (state_12833[(2)]);var state_12833__$1 = (function (){var statearr_12851 = state_12833;(statearr_12851[(12)] = inst_12826);
return statearr_12851;
})();var statearr_12852_12876 = state_12833__$1;(statearr_12852_12876[(2)] = null);
(statearr_12852_12876[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (10)))
{var inst_12801 = (state_12833[(2)]);var inst_12802 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12833__$1 = (function (){var statearr_12853 = state_12833;(statearr_12853[(13)] = inst_12801);
return statearr_12853;
})();var statearr_12854_12877 = state_12833__$1;(statearr_12854_12877[(2)] = inst_12802);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12833__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (8)))
{var inst_12815 = (state_12833[(2)]);var state_12833__$1 = state_12833;var statearr_12855_12878 = state_12833__$1;(statearr_12855_12878[(2)] = inst_12815);
(statearr_12855_12878[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6357__auto___12863,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6342__auto__,c__6357__auto___12863,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_12859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12859[(0)] = state_machine__6343__auto__);
(statearr_12859[(1)] = (1));
return statearr_12859;
});
var state_machine__6343__auto____1 = (function (state_12833){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_12833);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e12860){if((e12860 instanceof Object))
{var ex__6346__auto__ = e12860;var statearr_12861_12879 = state_12833;(statearr_12861_12879[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12833);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12880 = state_12833;
state_12833 = G__12880;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_12833){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_12833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto___12863,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6359__auto__ = (function (){var statearr_12862 = f__6358__auto__.call(null);(statearr_12862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto___12863);
return statearr_12862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto___12863,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6357__auto___12988 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto___12988,out){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto___12988,out){
return (function (state_12964){var state_val_12965 = (state_12964[(1)]);if((state_val_12965 === (7)))
{var inst_12944 = (state_12964[(7)]);var inst_12943 = (state_12964[(8)]);var inst_12943__$1 = (state_12964[(2)]);var inst_12944__$1 = cljs.core.nth.call(null,inst_12943__$1,(0),null);var inst_12945 = cljs.core.nth.call(null,inst_12943__$1,(1),null);var inst_12946 = (inst_12944__$1 == null);var state_12964__$1 = (function (){var statearr_12966 = state_12964;(statearr_12966[(9)] = inst_12945);
(statearr_12966[(7)] = inst_12944__$1);
(statearr_12966[(8)] = inst_12943__$1);
return statearr_12966;
})();if(cljs.core.truth_(inst_12946))
{var statearr_12967_12989 = state_12964__$1;(statearr_12967_12989[(1)] = (8));
} else
{var statearr_12968_12990 = state_12964__$1;(statearr_12968_12990[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12965 === (1)))
{var inst_12935 = cljs.core.vec.call(null,chs);var inst_12936 = inst_12935;var state_12964__$1 = (function (){var statearr_12969 = state_12964;(statearr_12969[(10)] = inst_12936);
return statearr_12969;
})();var statearr_12970_12991 = state_12964__$1;(statearr_12970_12991[(2)] = null);
(statearr_12970_12991[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12965 === (4)))
{var inst_12936 = (state_12964[(10)]);var state_12964__$1 = state_12964;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12964__$1,(7),inst_12936);
} else
{if((state_val_12965 === (6)))
{var inst_12960 = (state_12964[(2)]);var state_12964__$1 = state_12964;var statearr_12971_12992 = state_12964__$1;(statearr_12971_12992[(2)] = inst_12960);
(statearr_12971_12992[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12965 === (3)))
{var inst_12962 = (state_12964[(2)]);var state_12964__$1 = state_12964;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12964__$1,inst_12962);
} else
{if((state_val_12965 === (2)))
{var inst_12936 = (state_12964[(10)]);var inst_12938 = cljs.core.count.call(null,inst_12936);var inst_12939 = (inst_12938 > (0));var state_12964__$1 = state_12964;if(cljs.core.truth_(inst_12939))
{var statearr_12973_12993 = state_12964__$1;(statearr_12973_12993[(1)] = (4));
} else
{var statearr_12974_12994 = state_12964__$1;(statearr_12974_12994[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12965 === (11)))
{var inst_12936 = (state_12964[(10)]);var inst_12953 = (state_12964[(2)]);var tmp12972 = inst_12936;var inst_12936__$1 = tmp12972;var state_12964__$1 = (function (){var statearr_12975 = state_12964;(statearr_12975[(10)] = inst_12936__$1);
(statearr_12975[(11)] = inst_12953);
return statearr_12975;
})();var statearr_12976_12995 = state_12964__$1;(statearr_12976_12995[(2)] = null);
(statearr_12976_12995[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12965 === (9)))
{var inst_12944 = (state_12964[(7)]);var state_12964__$1 = state_12964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12964__$1,(11),out,inst_12944);
} else
{if((state_val_12965 === (5)))
{var inst_12958 = cljs.core.async.close_BANG_.call(null,out);var state_12964__$1 = state_12964;var statearr_12977_12996 = state_12964__$1;(statearr_12977_12996[(2)] = inst_12958);
(statearr_12977_12996[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12965 === (10)))
{var inst_12956 = (state_12964[(2)]);var state_12964__$1 = state_12964;var statearr_12978_12997 = state_12964__$1;(statearr_12978_12997[(2)] = inst_12956);
(statearr_12978_12997[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12965 === (8)))
{var inst_12945 = (state_12964[(9)]);var inst_12944 = (state_12964[(7)]);var inst_12936 = (state_12964[(10)]);var inst_12943 = (state_12964[(8)]);var inst_12948 = (function (){var c = inst_12945;var v = inst_12944;var vec__12941 = inst_12943;var cs = inst_12936;return ((function (c,v,vec__12941,cs,inst_12945,inst_12944,inst_12936,inst_12943,state_val_12965,c__6357__auto___12988,out){
return (function (p1__12881_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12881_SHARP_);
});
;})(c,v,vec__12941,cs,inst_12945,inst_12944,inst_12936,inst_12943,state_val_12965,c__6357__auto___12988,out))
})();var inst_12949 = cljs.core.filterv.call(null,inst_12948,inst_12936);var inst_12936__$1 = inst_12949;var state_12964__$1 = (function (){var statearr_12979 = state_12964;(statearr_12979[(10)] = inst_12936__$1);
return statearr_12979;
})();var statearr_12980_12998 = state_12964__$1;(statearr_12980_12998[(2)] = null);
(statearr_12980_12998[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6357__auto___12988,out))
;return ((function (switch__6342__auto__,c__6357__auto___12988,out){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_12984 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12984[(0)] = state_machine__6343__auto__);
(statearr_12984[(1)] = (1));
return statearr_12984;
});
var state_machine__6343__auto____1 = (function (state_12964){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_12964);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e12985){if((e12985 instanceof Object))
{var ex__6346__auto__ = e12985;var statearr_12986_12999 = state_12964;(statearr_12986_12999[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12964);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12985;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13000 = state_12964;
state_12964 = G__13000;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_12964){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_12964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto___12988,out))
})();var state__6359__auto__ = (function (){var statearr_12987 = f__6358__auto__.call(null);(statearr_12987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto___12988);
return statearr_12987;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto___12988,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6357__auto___13093 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto___13093,out){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto___13093,out){
return (function (state_13070){var state_val_13071 = (state_13070[(1)]);if((state_val_13071 === (7)))
{var inst_13052 = (state_13070[(7)]);var inst_13052__$1 = (state_13070[(2)]);var inst_13053 = (inst_13052__$1 == null);var inst_13054 = cljs.core.not.call(null,inst_13053);var state_13070__$1 = (function (){var statearr_13072 = state_13070;(statearr_13072[(7)] = inst_13052__$1);
return statearr_13072;
})();if(inst_13054)
{var statearr_13073_13094 = state_13070__$1;(statearr_13073_13094[(1)] = (8));
} else
{var statearr_13074_13095 = state_13070__$1;(statearr_13074_13095[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (1)))
{var inst_13047 = (0);var state_13070__$1 = (function (){var statearr_13075 = state_13070;(statearr_13075[(8)] = inst_13047);
return statearr_13075;
})();var statearr_13076_13096 = state_13070__$1;(statearr_13076_13096[(2)] = null);
(statearr_13076_13096[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (4)))
{var state_13070__$1 = state_13070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13070__$1,(7),ch);
} else
{if((state_val_13071 === (6)))
{var inst_13065 = (state_13070[(2)]);var state_13070__$1 = state_13070;var statearr_13077_13097 = state_13070__$1;(statearr_13077_13097[(2)] = inst_13065);
(statearr_13077_13097[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (3)))
{var inst_13067 = (state_13070[(2)]);var inst_13068 = cljs.core.async.close_BANG_.call(null,out);var state_13070__$1 = (function (){var statearr_13078 = state_13070;(statearr_13078[(9)] = inst_13067);
return statearr_13078;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13070__$1,inst_13068);
} else
{if((state_val_13071 === (2)))
{var inst_13047 = (state_13070[(8)]);var inst_13049 = (inst_13047 < n);var state_13070__$1 = state_13070;if(cljs.core.truth_(inst_13049))
{var statearr_13079_13098 = state_13070__$1;(statearr_13079_13098[(1)] = (4));
} else
{var statearr_13080_13099 = state_13070__$1;(statearr_13080_13099[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (11)))
{var inst_13047 = (state_13070[(8)]);var inst_13057 = (state_13070[(2)]);var inst_13058 = (inst_13047 + (1));var inst_13047__$1 = inst_13058;var state_13070__$1 = (function (){var statearr_13081 = state_13070;(statearr_13081[(8)] = inst_13047__$1);
(statearr_13081[(10)] = inst_13057);
return statearr_13081;
})();var statearr_13082_13100 = state_13070__$1;(statearr_13082_13100[(2)] = null);
(statearr_13082_13100[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (9)))
{var state_13070__$1 = state_13070;var statearr_13083_13101 = state_13070__$1;(statearr_13083_13101[(2)] = null);
(statearr_13083_13101[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (5)))
{var state_13070__$1 = state_13070;var statearr_13084_13102 = state_13070__$1;(statearr_13084_13102[(2)] = null);
(statearr_13084_13102[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (10)))
{var inst_13062 = (state_13070[(2)]);var state_13070__$1 = state_13070;var statearr_13085_13103 = state_13070__$1;(statearr_13085_13103[(2)] = inst_13062);
(statearr_13085_13103[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (8)))
{var inst_13052 = (state_13070[(7)]);var state_13070__$1 = state_13070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13070__$1,(11),out,inst_13052);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6357__auto___13093,out))
;return ((function (switch__6342__auto__,c__6357__auto___13093,out){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_13089 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13089[(0)] = state_machine__6343__auto__);
(statearr_13089[(1)] = (1));
return statearr_13089;
});
var state_machine__6343__auto____1 = (function (state_13070){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_13070);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e13090){if((e13090 instanceof Object))
{var ex__6346__auto__ = e13090;var statearr_13091_13104 = state_13070;(statearr_13091_13104[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13070);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13090;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13105 = state_13070;
state_13070 = G__13105;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_13070){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_13070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto___13093,out))
})();var state__6359__auto__ = (function (){var statearr_13092 = f__6358__auto__.call(null);(statearr_13092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto___13093);
return statearr_13092;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto___13093,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6357__auto___13202 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto___13202,out){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto___13202,out){
return (function (state_13177){var state_val_13178 = (state_13177[(1)]);if((state_val_13178 === (7)))
{var inst_13172 = (state_13177[(2)]);var state_13177__$1 = state_13177;var statearr_13179_13203 = state_13177__$1;(statearr_13179_13203[(2)] = inst_13172);
(statearr_13179_13203[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (1)))
{var inst_13154 = null;var state_13177__$1 = (function (){var statearr_13180 = state_13177;(statearr_13180[(7)] = inst_13154);
return statearr_13180;
})();var statearr_13181_13204 = state_13177__$1;(statearr_13181_13204[(2)] = null);
(statearr_13181_13204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (4)))
{var inst_13157 = (state_13177[(8)]);var inst_13157__$1 = (state_13177[(2)]);var inst_13158 = (inst_13157__$1 == null);var inst_13159 = cljs.core.not.call(null,inst_13158);var state_13177__$1 = (function (){var statearr_13182 = state_13177;(statearr_13182[(8)] = inst_13157__$1);
return statearr_13182;
})();if(inst_13159)
{var statearr_13183_13205 = state_13177__$1;(statearr_13183_13205[(1)] = (5));
} else
{var statearr_13184_13206 = state_13177__$1;(statearr_13184_13206[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (6)))
{var state_13177__$1 = state_13177;var statearr_13185_13207 = state_13177__$1;(statearr_13185_13207[(2)] = null);
(statearr_13185_13207[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (3)))
{var inst_13174 = (state_13177[(2)]);var inst_13175 = cljs.core.async.close_BANG_.call(null,out);var state_13177__$1 = (function (){var statearr_13186 = state_13177;(statearr_13186[(9)] = inst_13174);
return statearr_13186;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13177__$1,inst_13175);
} else
{if((state_val_13178 === (2)))
{var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13177__$1,(4),ch);
} else
{if((state_val_13178 === (11)))
{var inst_13157 = (state_13177[(8)]);var inst_13166 = (state_13177[(2)]);var inst_13154 = inst_13157;var state_13177__$1 = (function (){var statearr_13187 = state_13177;(statearr_13187[(10)] = inst_13166);
(statearr_13187[(7)] = inst_13154);
return statearr_13187;
})();var statearr_13188_13208 = state_13177__$1;(statearr_13188_13208[(2)] = null);
(statearr_13188_13208[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (9)))
{var inst_13157 = (state_13177[(8)]);var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13177__$1,(11),out,inst_13157);
} else
{if((state_val_13178 === (5)))
{var inst_13157 = (state_13177[(8)]);var inst_13154 = (state_13177[(7)]);var inst_13161 = cljs.core._EQ_.call(null,inst_13157,inst_13154);var state_13177__$1 = state_13177;if(inst_13161)
{var statearr_13190_13209 = state_13177__$1;(statearr_13190_13209[(1)] = (8));
} else
{var statearr_13191_13210 = state_13177__$1;(statearr_13191_13210[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (10)))
{var inst_13169 = (state_13177[(2)]);var state_13177__$1 = state_13177;var statearr_13192_13211 = state_13177__$1;(statearr_13192_13211[(2)] = inst_13169);
(statearr_13192_13211[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (8)))
{var inst_13154 = (state_13177[(7)]);var tmp13189 = inst_13154;var inst_13154__$1 = tmp13189;var state_13177__$1 = (function (){var statearr_13193 = state_13177;(statearr_13193[(7)] = inst_13154__$1);
return statearr_13193;
})();var statearr_13194_13212 = state_13177__$1;(statearr_13194_13212[(2)] = null);
(statearr_13194_13212[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6357__auto___13202,out))
;return ((function (switch__6342__auto__,c__6357__auto___13202,out){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_13198 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13198[(0)] = state_machine__6343__auto__);
(statearr_13198[(1)] = (1));
return statearr_13198;
});
var state_machine__6343__auto____1 = (function (state_13177){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_13177);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e13199){if((e13199 instanceof Object))
{var ex__6346__auto__ = e13199;var statearr_13200_13213 = state_13177;(statearr_13200_13213[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13177);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13199;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13214 = state_13177;
state_13177 = G__13214;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_13177){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_13177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto___13202,out))
})();var state__6359__auto__ = (function (){var statearr_13201 = f__6358__auto__.call(null);(statearr_13201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto___13202);
return statearr_13201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto___13202,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6357__auto___13349 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto___13349,out){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto___13349,out){
return (function (state_13319){var state_val_13320 = (state_13319[(1)]);if((state_val_13320 === (7)))
{var inst_13315 = (state_13319[(2)]);var state_13319__$1 = state_13319;var statearr_13321_13350 = state_13319__$1;(statearr_13321_13350[(2)] = inst_13315);
(statearr_13321_13350[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (1)))
{var inst_13282 = (new Array(n));var inst_13283 = inst_13282;var inst_13284 = (0);var state_13319__$1 = (function (){var statearr_13322 = state_13319;(statearr_13322[(7)] = inst_13284);
(statearr_13322[(8)] = inst_13283);
return statearr_13322;
})();var statearr_13323_13351 = state_13319__$1;(statearr_13323_13351[(2)] = null);
(statearr_13323_13351[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (4)))
{var inst_13287 = (state_13319[(9)]);var inst_13287__$1 = (state_13319[(2)]);var inst_13288 = (inst_13287__$1 == null);var inst_13289 = cljs.core.not.call(null,inst_13288);var state_13319__$1 = (function (){var statearr_13324 = state_13319;(statearr_13324[(9)] = inst_13287__$1);
return statearr_13324;
})();if(inst_13289)
{var statearr_13325_13352 = state_13319__$1;(statearr_13325_13352[(1)] = (5));
} else
{var statearr_13326_13353 = state_13319__$1;(statearr_13326_13353[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (15)))
{var inst_13309 = (state_13319[(2)]);var state_13319__$1 = state_13319;var statearr_13327_13354 = state_13319__$1;(statearr_13327_13354[(2)] = inst_13309);
(statearr_13327_13354[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (13)))
{var state_13319__$1 = state_13319;var statearr_13328_13355 = state_13319__$1;(statearr_13328_13355[(2)] = null);
(statearr_13328_13355[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (6)))
{var inst_13284 = (state_13319[(7)]);var inst_13305 = (inst_13284 > (0));var state_13319__$1 = state_13319;if(cljs.core.truth_(inst_13305))
{var statearr_13329_13356 = state_13319__$1;(statearr_13329_13356[(1)] = (12));
} else
{var statearr_13330_13357 = state_13319__$1;(statearr_13330_13357[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (3)))
{var inst_13317 = (state_13319[(2)]);var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13319__$1,inst_13317);
} else
{if((state_val_13320 === (12)))
{var inst_13283 = (state_13319[(8)]);var inst_13307 = cljs.core.vec.call(null,inst_13283);var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13319__$1,(15),out,inst_13307);
} else
{if((state_val_13320 === (2)))
{var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13319__$1,(4),ch);
} else
{if((state_val_13320 === (11)))
{var inst_13299 = (state_13319[(2)]);var inst_13300 = (new Array(n));var inst_13283 = inst_13300;var inst_13284 = (0);var state_13319__$1 = (function (){var statearr_13331 = state_13319;(statearr_13331[(7)] = inst_13284);
(statearr_13331[(8)] = inst_13283);
(statearr_13331[(10)] = inst_13299);
return statearr_13331;
})();var statearr_13332_13358 = state_13319__$1;(statearr_13332_13358[(2)] = null);
(statearr_13332_13358[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (9)))
{var inst_13283 = (state_13319[(8)]);var inst_13297 = cljs.core.vec.call(null,inst_13283);var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13319__$1,(11),out,inst_13297);
} else
{if((state_val_13320 === (5)))
{var inst_13284 = (state_13319[(7)]);var inst_13287 = (state_13319[(9)]);var inst_13283 = (state_13319[(8)]);var inst_13292 = (state_13319[(11)]);var inst_13291 = (inst_13283[inst_13284] = inst_13287);var inst_13292__$1 = (inst_13284 + (1));var inst_13293 = (inst_13292__$1 < n);var state_13319__$1 = (function (){var statearr_13333 = state_13319;(statearr_13333[(12)] = inst_13291);
(statearr_13333[(11)] = inst_13292__$1);
return statearr_13333;
})();if(cljs.core.truth_(inst_13293))
{var statearr_13334_13359 = state_13319__$1;(statearr_13334_13359[(1)] = (8));
} else
{var statearr_13335_13360 = state_13319__$1;(statearr_13335_13360[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (14)))
{var inst_13312 = (state_13319[(2)]);var inst_13313 = cljs.core.async.close_BANG_.call(null,out);var state_13319__$1 = (function (){var statearr_13337 = state_13319;(statearr_13337[(13)] = inst_13312);
return statearr_13337;
})();var statearr_13338_13361 = state_13319__$1;(statearr_13338_13361[(2)] = inst_13313);
(statearr_13338_13361[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (10)))
{var inst_13303 = (state_13319[(2)]);var state_13319__$1 = state_13319;var statearr_13339_13362 = state_13319__$1;(statearr_13339_13362[(2)] = inst_13303);
(statearr_13339_13362[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (8)))
{var inst_13283 = (state_13319[(8)]);var inst_13292 = (state_13319[(11)]);var tmp13336 = inst_13283;var inst_13283__$1 = tmp13336;var inst_13284 = inst_13292;var state_13319__$1 = (function (){var statearr_13340 = state_13319;(statearr_13340[(7)] = inst_13284);
(statearr_13340[(8)] = inst_13283__$1);
return statearr_13340;
})();var statearr_13341_13363 = state_13319__$1;(statearr_13341_13363[(2)] = null);
(statearr_13341_13363[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6357__auto___13349,out))
;return ((function (switch__6342__auto__,c__6357__auto___13349,out){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_13345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13345[(0)] = state_machine__6343__auto__);
(statearr_13345[(1)] = (1));
return statearr_13345;
});
var state_machine__6343__auto____1 = (function (state_13319){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_13319);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e13346){if((e13346 instanceof Object))
{var ex__6346__auto__ = e13346;var statearr_13347_13364 = state_13319;(statearr_13347_13364[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13319);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13365 = state_13319;
state_13319 = G__13365;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_13319){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_13319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto___13349,out))
})();var state__6359__auto__ = (function (){var statearr_13348 = f__6358__auto__.call(null);(statearr_13348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto___13349);
return statearr_13348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto___13349,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6357__auto___13508 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto___13508,out){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto___13508,out){
return (function (state_13478){var state_val_13479 = (state_13478[(1)]);if((state_val_13479 === (7)))
{var inst_13474 = (state_13478[(2)]);var state_13478__$1 = state_13478;var statearr_13480_13509 = state_13478__$1;(statearr_13480_13509[(2)] = inst_13474);
(statearr_13480_13509[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (1)))
{var inst_13437 = [];var inst_13438 = inst_13437;var inst_13439 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13478__$1 = (function (){var statearr_13481 = state_13478;(statearr_13481[(7)] = inst_13439);
(statearr_13481[(8)] = inst_13438);
return statearr_13481;
})();var statearr_13482_13510 = state_13478__$1;(statearr_13482_13510[(2)] = null);
(statearr_13482_13510[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (4)))
{var inst_13442 = (state_13478[(9)]);var inst_13442__$1 = (state_13478[(2)]);var inst_13443 = (inst_13442__$1 == null);var inst_13444 = cljs.core.not.call(null,inst_13443);var state_13478__$1 = (function (){var statearr_13483 = state_13478;(statearr_13483[(9)] = inst_13442__$1);
return statearr_13483;
})();if(inst_13444)
{var statearr_13484_13511 = state_13478__$1;(statearr_13484_13511[(1)] = (5));
} else
{var statearr_13485_13512 = state_13478__$1;(statearr_13485_13512[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (15)))
{var inst_13468 = (state_13478[(2)]);var state_13478__$1 = state_13478;var statearr_13486_13513 = state_13478__$1;(statearr_13486_13513[(2)] = inst_13468);
(statearr_13486_13513[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (13)))
{var state_13478__$1 = state_13478;var statearr_13487_13514 = state_13478__$1;(statearr_13487_13514[(2)] = null);
(statearr_13487_13514[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (6)))
{var inst_13438 = (state_13478[(8)]);var inst_13463 = inst_13438.length;var inst_13464 = (inst_13463 > (0));var state_13478__$1 = state_13478;if(cljs.core.truth_(inst_13464))
{var statearr_13488_13515 = state_13478__$1;(statearr_13488_13515[(1)] = (12));
} else
{var statearr_13489_13516 = state_13478__$1;(statearr_13489_13516[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (3)))
{var inst_13476 = (state_13478[(2)]);var state_13478__$1 = state_13478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13478__$1,inst_13476);
} else
{if((state_val_13479 === (12)))
{var inst_13438 = (state_13478[(8)]);var inst_13466 = cljs.core.vec.call(null,inst_13438);var state_13478__$1 = state_13478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13478__$1,(15),out,inst_13466);
} else
{if((state_val_13479 === (2)))
{var state_13478__$1 = state_13478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13478__$1,(4),ch);
} else
{if((state_val_13479 === (11)))
{var inst_13446 = (state_13478[(10)]);var inst_13442 = (state_13478[(9)]);var inst_13456 = (state_13478[(2)]);var inst_13457 = [];var inst_13458 = inst_13457.push(inst_13442);var inst_13438 = inst_13457;var inst_13439 = inst_13446;var state_13478__$1 = (function (){var statearr_13490 = state_13478;(statearr_13490[(11)] = inst_13456);
(statearr_13490[(7)] = inst_13439);
(statearr_13490[(8)] = inst_13438);
(statearr_13490[(12)] = inst_13458);
return statearr_13490;
})();var statearr_13491_13517 = state_13478__$1;(statearr_13491_13517[(2)] = null);
(statearr_13491_13517[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (9)))
{var inst_13438 = (state_13478[(8)]);var inst_13454 = cljs.core.vec.call(null,inst_13438);var state_13478__$1 = state_13478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13478__$1,(11),out,inst_13454);
} else
{if((state_val_13479 === (5)))
{var inst_13439 = (state_13478[(7)]);var inst_13446 = (state_13478[(10)]);var inst_13442 = (state_13478[(9)]);var inst_13446__$1 = f.call(null,inst_13442);var inst_13447 = cljs.core._EQ_.call(null,inst_13446__$1,inst_13439);var inst_13448 = cljs.core.keyword_identical_QMARK_.call(null,inst_13439,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13449 = (inst_13447) || (inst_13448);var state_13478__$1 = (function (){var statearr_13492 = state_13478;(statearr_13492[(10)] = inst_13446__$1);
return statearr_13492;
})();if(cljs.core.truth_(inst_13449))
{var statearr_13493_13518 = state_13478__$1;(statearr_13493_13518[(1)] = (8));
} else
{var statearr_13494_13519 = state_13478__$1;(statearr_13494_13519[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (14)))
{var inst_13471 = (state_13478[(2)]);var inst_13472 = cljs.core.async.close_BANG_.call(null,out);var state_13478__$1 = (function (){var statearr_13496 = state_13478;(statearr_13496[(13)] = inst_13471);
return statearr_13496;
})();var statearr_13497_13520 = state_13478__$1;(statearr_13497_13520[(2)] = inst_13472);
(statearr_13497_13520[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (10)))
{var inst_13461 = (state_13478[(2)]);var state_13478__$1 = state_13478;var statearr_13498_13521 = state_13478__$1;(statearr_13498_13521[(2)] = inst_13461);
(statearr_13498_13521[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (8)))
{var inst_13438 = (state_13478[(8)]);var inst_13446 = (state_13478[(10)]);var inst_13442 = (state_13478[(9)]);var inst_13451 = inst_13438.push(inst_13442);var tmp13495 = inst_13438;var inst_13438__$1 = tmp13495;var inst_13439 = inst_13446;var state_13478__$1 = (function (){var statearr_13499 = state_13478;(statearr_13499[(14)] = inst_13451);
(statearr_13499[(7)] = inst_13439);
(statearr_13499[(8)] = inst_13438__$1);
return statearr_13499;
})();var statearr_13500_13522 = state_13478__$1;(statearr_13500_13522[(2)] = null);
(statearr_13500_13522[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6357__auto___13508,out))
;return ((function (switch__6342__auto__,c__6357__auto___13508,out){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_13504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13504[(0)] = state_machine__6343__auto__);
(statearr_13504[(1)] = (1));
return statearr_13504;
});
var state_machine__6343__auto____1 = (function (state_13478){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_13478);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e13505){if((e13505 instanceof Object))
{var ex__6346__auto__ = e13505;var statearr_13506_13523 = state_13478;(statearr_13506_13523[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13478);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13505;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13524 = state_13478;
state_13478 = G__13524;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_13478){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_13478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto___13508,out))
})();var state__6359__auto__ = (function (){var statearr_13507 = f__6358__auto__.call(null);(statearr_13507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto___13508);
return statearr_13507;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto___13508,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

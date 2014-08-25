// Compiled by ClojureScript 0.0-2277
goog.provide('omingard.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('clojure.data');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_();
React.initializeTouchEvents(true);
omingard.core.debugg = (function debugg(app,text){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64], null),(function (a){return cljs.core.cons(text,a);
}));
});
omingard.core.value_from_literal_value = (function value_from_literal_value(literal_value){var literal_value__$1 = clojure.string.lower_case(literal_value);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(literal_value__$1,"a"))
{return (1);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(literal_value__$1,"j"))
{return (11);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(literal_value__$1,"q"))
{return (12);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(literal_value__$1,"k"))
{return (13);
} else
{if(cljs.core.constant$keyword$6)
{return parseInt(literal_value__$1);
} else
{return null;
}
}
}
}
}
});
omingard.core.make_card = (function make_card(card_string){var card_components = clojure.string.split.cljs$core$IFn$_invoke$arity$2(card_string,/\./);var suit = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(card_components));var value = cljs.core.second(card_components);var option = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(card_components)))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.last(card_components)):null);var deck = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([option], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$65,cljs.core.constant$keyword$66], null)))?option:null);var open = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$67,option))?true:null);var card = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suit,cljs.core.constant$keyword$71))?cljs.core.constant$keyword$72:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suit,cljs.core.constant$keyword$73))?cljs.core.constant$keyword$74:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suit,cljs.core.constant$keyword$75))?cljs.core.constant$keyword$76:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suit,cljs.core.constant$keyword$77))?cljs.core.constant$keyword$78:null)))),cljs.core.constant$keyword$69,omingard.core.value_from_literal_value(value),cljs.core.constant$keyword$70,(function (){var or__3541__auto__ = deck;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.constant$keyword$65;
}
})()], null);if(cljs.core.truth_(open))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(card,cljs.core.constant$keyword$79,true);
} else
{return card;
}
});
omingard.core.columns_SHARP_ = (9);
omingard.core.suits = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$78,cljs.core.constant$keyword$72,cljs.core.constant$keyword$74], null);
omingard.core.cards_for_suit = (function cards_for_suit(suit){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$70,cljs.core.constant$keyword$65,cljs.core.constant$keyword$68,suit,cljs.core.constant$keyword$69,value], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$70,cljs.core.constant$keyword$66,cljs.core.constant$keyword$68,suit,cljs.core.constant$keyword$69,value], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(14)));
});
omingard.core.shuffled_stack = (function shuffled_stack(){return cljs.core.shuffle(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(omingard.core.cards_for_suit,omingard.core.suits));
});
omingard.core.piles_for_suits = (function piles_for_suits(suits){return cljs.core.vec(cljs.core.map_indexed((function (idx,suit){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,idx,cljs.core.constant$keyword$68,suit,cljs.core.constant$keyword$81,cljs.core.PersistentVector.EMPTY], null);
}),suits));
});
omingard.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$82,omingard.core.shuffled_stack(),cljs.core.constant$keyword$83,omingard.core.piles_for_suits(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (suit){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [suit,suit], null);
}),omingard.core.suits)),cljs.core.constant$keyword$84,cljs.core.vec(cljs.core.map_indexed((function (idx,_){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$80,idx,cljs.core.constant$keyword$81,cljs.core.PersistentVector.EMPTY], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(omingard.core.columns_SHARP_))),cljs.core.constant$keyword$64,cljs.core.PersistentVector.EMPTY], null));
/**
* @param {...*} var_args
*/
omingard.core.serve_card_to_column = (function() { 
var serve_card_to_column__delegate = function (state,column_index,p__9464){var vec__9466 = p__9464;var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9466,(0),null);var card = cljs.core.peek(cljs.core.constant$keyword$82.cljs$core$IFn$_invoke$arity$1(state));var card__$1 = (cljs.core.truth_((function (){var and__3529__auto__ = open_QMARK_;if(cljs.core.truth_(and__3529__auto__))
{return card;
} else
{return and__3529__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(card,cljs.core.constant$keyword$79,true):card);if(cljs.core.truth_(card__$1))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82], null),cljs.core.pop),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,column_index,cljs.core.constant$keyword$81], null),cljs.core.conj,card__$1);
} else
{return state;
}
};
var serve_card_to_column = function (state,column_index,var_args){
var p__9464 = null;if (arguments.length > 2) {
  p__9464 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return serve_card_to_column__delegate.call(this,state,column_index,p__9464);};
serve_card_to_column.cljs$lang$maxFixedArity = 2;
serve_card_to_column.cljs$lang$applyTo = (function (arglist__9467){
var state = cljs.core.first(arglist__9467);
arglist__9467 = cljs.core.next(arglist__9467);
var column_index = cljs.core.first(arglist__9467);
var p__9464 = cljs.core.rest(arglist__9467);
return serve_card_to_column__delegate(state,column_index,p__9464);
});
serve_card_to_column.cljs$core$IFn$_invoke$arity$variadic = serve_card_to_column__delegate;
return serve_card_to_column;
})()
;
omingard.core.serve_cards_to_column = (function serve_cards_to_column(state,column_index,n){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (memo,val){return omingard.core.serve_card_to_column.cljs$core$IFn$_invoke$arity$variadic(memo,column_index,cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((n - (1)),val))?true:false)], 0));
}),state,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
omingard.core.serve_cards = (function serve_cards(state){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,p__9470){var vec__9471 = p__9470;var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9471,(0),null);var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9471,(1),null);return omingard.core.serve_cards_to_column(state__$1,idx,n);
}),state,cljs.core.map_indexed(cljs.core.vector,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(4),(3),(2),(1)], null)));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(omingard.core.app_state,omingard.core.serve_cards);
omingard.core.colour = (function colour(suit){if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([suit], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$78], null))))
{return "red";
} else
{if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([suit], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,cljs.core.constant$keyword$72], null))))
{return "black";
} else
{return null;
}
}
});
omingard.core.card_colour = (function card_colour(p__9472){var map__9474 = p__9472;var map__9474__$1 = ((cljs.core.seq_QMARK_(map__9474))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9474):map__9474);var suit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9474__$1,cljs.core.constant$keyword$68);return omingard.core.colour(suit);
});
omingard.core.display_value = (function display_value(p__9475){var map__9477 = p__9475;var map__9477__$1 = ((cljs.core.seq_QMARK_(map__9477))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9477):map__9477);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9477__$1,cljs.core.constant$keyword$69);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(1)))
{return "A";
} else
{if(((value > (0))) && ((value < (11))))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(11)))
{return "J";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(12)))
{return "Q";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(13)))
{return "K";
} else
{return null;
}
}
}
}
}
});
omingard.core.symbol_for_suit = (function symbol_for_suit(suit){var G__9479 = (((suit instanceof cljs.core.Keyword))?suit.fqn:null);switch (G__9479) {
case "clubs":
return "\u2663";

break;
case "diamonds":
return "\u2666";

break;
case "hearts":
return "\u2665";

break;
case "spades":
return "\u2660";

break;
default:
return null;

}
});
omingard.core.open_QMARK_ = (function open_QMARK_(card){return cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(card);
});
omingard.core.label_for = (function label_for(card){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(omingard.core.symbol_for_suit(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(card)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(omingard.core.display_value(card))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(card))+")");
});
omingard.core.unmark_card = (function unmark_card(card){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(card,cljs.core.constant$keyword$85);
});
omingard.core.index_for = (function index_for(vektor,card){return cljs.core.first(cljs.core.keep_indexed((function (idx,el){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,card))
{return idx;
} else
{return null;
}
}),vektor));
});
omingard.core.children_of = (function children_of(column_cards,card){return cljs.core.vec(cljs.core.rest(cljs.core.drop_while((function (el){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(el,card);
}),column_cards)));
});
omingard.core.with_alternating_colours_QMARK_ = (function with_alternating_colours_QMARK_(cards){var colours = cljs.core.map.cljs$core$IFn$_invoke$arity$2(omingard.core.card_colour,cards);return cljs.core.boolean$(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (colours){
return (function (memo,colour){if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(memo,colour)))
{return colour;
} else
{return cljs.core.reduced(false);
}
});})(colours))
,cljs.core.first(colours),cljs.core.rest(colours)));
});
omingard.core.with_descending_values_QMARK_ = (function with_descending_values_QMARK_(cards){var values = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$69,cards);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(values,cljs.core.vec(cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cards)),(cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cards)) + (1))))));
});
omingard.core.sorted_from_card_QMARK_ = (function sorted_from_card_QMARK_(column_cards,card){var children = omingard.core.children_of(column_cards,card);if(cljs.core.empty_QMARK_(children))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(card,cljs.core.last(column_cards));
} else
{if(cljs.core.constant$keyword$6)
{var cards = cljs.core.cons(card,children);return (omingard.core.with_descending_values_QMARK_(cards)) && (omingard.core.with_alternating_colours_QMARK_(cards));
} else
{return null;
}
}
});
omingard.core.moveable_QMARK_ = (function moveable_QMARK_(column_cards,card){var and__3529__auto__ = omingard.core.open_QMARK_(card);if(cljs.core.truth_(and__3529__auto__))
{return omingard.core.sorted_from_card_QMARK_(column_cards,card);
} else
{return and__3529__auto__;
}
});
omingard.core.free_pile_for = (function free_pile_for(piles,card){return cljs.core.first(cljs.core.filter((function (pile){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(pile),cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(card))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(pile)),(cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(card) - (1))));
}),piles));
});
omingard.core.column_for = (function column_for(columns,card){return cljs.core.first(cljs.core.filter((function (column){return cljs.core.some(cljs.core.PersistentHashSet.fromArray([card], true),cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(column));
}),columns));
});
omingard.core.pile_for = (function pile_for(piles,card){return cljs.core.first(cljs.core.filter((function (pile){return cljs.core.some(cljs.core.PersistentHashSet.fromArray([card], true),cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(pile));
}),piles));
});
omingard.core.discardable_QMARK_ = (function discardable_QMARK_(app,card){var column = omingard.core.column_for(cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(app),card);var and__3529__auto__ = omingard.core.moveable_QMARK_(cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(column),card);if(cljs.core.truth_(and__3529__auto__))
{return omingard.core.free_pile_for(cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(app),card);
} else
{return and__3529__auto__;
}
});
omingard.core.discard_card = (function discard_card(app,card){var column = omingard.core.column_for(cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(app),card);if(cljs.core.truth_(omingard.core.discardable_QMARK_(app,card)))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(column),cljs.core.constant$keyword$81], null),cljs.core.pop),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(omingard.core.free_pile_for(cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(app),card)),cljs.core.constant$keyword$81], null),cljs.core.conj,omingard.core.unmark_card(card)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(column),cljs.core.constant$keyword$81], null),((function (column){
return (function (cards){if(cljs.core.seq(cards))
{return cljs.core.assoc_in(cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(cards) - (1)),cljs.core.constant$keyword$79], null),true);
} else
{return null;
}
});})(column))
);
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(column),cljs.core.constant$keyword$81,omingard.core.index_for(cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(column),card)], null),omingard.core.unmark_card);
} else
{return null;
}
}
});
omingard.core.path_vector_for_card = (function path_vector_for_card(app,card){var column = omingard.core.column_for(cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(app),card);var pile = omingard.core.pile_for(cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(app),card);if(cljs.core.truth_(column))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(column),cljs.core.constant$keyword$81,omingard.core.index_for(cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(column),card)], null);
} else
{if(cljs.core.truth_(pile))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(pile),cljs.core.constant$keyword$81,omingard.core.index_for(cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(pile),card)], null);
} else
{return null;
}
}
});
omingard.core.first_path = (function first_path(app,card){return cljs.core.first(omingard.core.path_vector_for_card(app,card));
});
omingard.core.where_am_i_QMARK_ = (function where_am_i_QMARK_(app,card){var path = omingard.core.first_path(app,card);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$84,omingard.core.first_path))
{return cljs.core.constant$keyword$86;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$83,omingard.core.first_path))
{return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.constant$keyword$82;
} else
{return null;
}
}
}
});
omingard.core.in_columns_QMARK_ = (function in_columns_QMARK_(app,card){var first_path = cljs.core.first(omingard.core.path_vector_for_card(app,card));return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$84,first_path);
});
omingard.core.in_piles_QMARK_ = (function in_piles_QMARK_(app,card){var first_path = cljs.core.first(omingard.core.path_vector_for_card(app,card));return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$83,first_path);
});
omingard.core.in_stack_QMARK_ = (function in_stack_QMARK_(app,card){var first_path = cljs.core.first(omingard.core.path_vector_for_card(app,card));return (first_path == null);
});
omingard.core.mark_card_for_moving = (function mark_card_for_moving(app,card){return cljs.core.assoc_in(app,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(omingard.core.path_vector_for_card(app,card),cljs.core.constant$keyword$85),true);
});
omingard.core.mark_column_card_for_moving = (function mark_column_card_for_moving(app,column_index,card_index){return cljs.core.assoc_in(app,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,column_index,cljs.core.constant$keyword$81,card_index,cljs.core.constant$keyword$85], null),true);
});
omingard.core.mark_card_and_children_for_moving = (function mark_card_and_children_for_moving(app,card){var column = omingard.core.column_for(cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(app),card);var column_cards = cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(column);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (column,column_cards){
return (function (memo,idx){return omingard.core.mark_column_card_for_moving(memo,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(column),idx);
});})(column,column_cards))
,app,cljs.core.range.cljs$core$IFn$_invoke$arity$2(omingard.core.index_for(column_cards,card),cljs.core.count(column_cards)));
});
omingard.core.all_cards = (function all_cards(app){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (memo,el){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,memo,cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(el));
}),cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(app));
});
omingard.core.cards_marked_for_moving = (function cards_marked_for_moving(app){return cljs.core.filter(cljs.core.constant$keyword$85,omingard.core.all_cards(app));
});
omingard.core.unmark_all_column_cards = (function unmark_all_column_cards(app){var cards_to_unmark = omingard.core.cards_marked_for_moving(app);var columns = cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(app);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cards_to_unmark,columns){
return (function (memo,card){var column = omingard.core.column_for(columns,card);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(memo,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(column),cljs.core.constant$keyword$81,omingard.core.index_for(cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(column),card)], null),((function (column,cards_to_unmark,columns){
return (function (p1__9481_SHARP_){return omingard.core.unmark_card(p1__9481_SHARP_);
});})(column,cards_to_unmark,columns))
);
});})(cards_to_unmark,columns))
,app,cards_to_unmark);
});
omingard.core.can_be_appended_to_QMARK_ = (function can_be_appended_to_QMARK_(card,column){var upper_card = cljs.core.last(cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(column));var lower_card = card;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(upper_card),(cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(lower_card) + (1)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(omingard.core.card_colour(upper_card),omingard.core.card_colour(lower_card)));
});
omingard.core.move_marked_cards_to = (function move_marked_cards_to(app,new_column){var columns = cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(app);var cards_to_move = omingard.core.cards_marked_for_moving(app);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (columns,cards_to_move){
return (function (memo,card){var old_column = omingard.core.column_for(columns,card);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(memo,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(old_column),cljs.core.constant$keyword$81], null),cljs.core.pop),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(old_column),cljs.core.constant$keyword$81], null),((function (old_column,columns,cards_to_move){
return (function (p1__9482_SHARP_){if(cljs.core.seq(p1__9482_SHARP_))
{return cljs.core.assoc_in(p1__9482_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(p1__9482_SHARP_) - (1)),cljs.core.constant$keyword$79], null),true);
} else
{return null;
}
});})(old_column,columns,cards_to_move))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(new_column),cljs.core.constant$keyword$81], null),cljs.core.conj,card);
});})(columns,cards_to_move))
,app,cards_to_move);
});
omingard.core.handle_click = (function handle_click(app,clicked_card){var column = omingard.core.column_for(cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(app),clicked_card);if(cljs.core.truth_((function (){var and__3529__auto__ = cljs.core.not(column);if(and__3529__auto__)
{return omingard.core.open_QMARK_(clicked_card);
} else
{return and__3529__auto__;
}
})()))
{return omingard.core.mark_card_for_moving(app,clicked_card);
} else
{if(cljs.core.truth_(omingard.core.moveable_QMARK_(cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(column),clicked_card)))
{if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([clicked_card], true),omingard.core.cards_marked_for_moving(app))))
{return omingard.core.discard_card(app,clicked_card);
} else
{if(cljs.core.constant$keyword$6)
{if(cljs.core.seq(omingard.core.cards_marked_for_moving(app)))
{console.log("Try to move some cards here");
if(omingard.core.can_be_appended_to_QMARK_(cljs.core.first(omingard.core.cards_marked_for_moving(app)),column))
{console.log("Looks safe, moving!");
return omingard.core.unmark_all_column_cards(omingard.core.move_marked_cards_to(app,omingard.core.column_for(cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(app),clicked_card)));
} else
{console.log("Sorry, cannot move that there, honey!");
return omingard.core.mark_card_and_children_for_moving(omingard.core.unmark_all_column_cards(app),clicked_card);
}
} else
{if(cljs.core.constant$keyword$6)
{console.log("no cards marked for moving");
return omingard.core.mark_card_and_children_for_moving(app,clicked_card);
} else
{return null;
}
}
} else
{return null;
}
}
} else
{if(cljs.core.constant$keyword$6)
{return app;
} else
{return null;
}
}
}
});
omingard.core.serve_new_cards = (function serve_new_cards(app){var app__$1 = omingard.core.unmark_all_column_cards(app);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (app__$1){
return (function (memo,i){return omingard.core.serve_card_to_column.cljs$core$IFn$_invoke$arity$variadic(memo,i,cljs.core.array_seq([true], 0));
});})(app__$1))
,app__$1,cljs.core.range.cljs$core$IFn$_invoke$arity$1(omingard.core.columns_SHARP_));
});
omingard.core.handle_column_placeholder_click = (function handle_column_placeholder_click(app,column_index){return console.log("handle-column-placeholder-click",column_index);
});
omingard.core.column_placeholder_view = (function column_placeholder_view(column_index,owner){if(typeof omingard.core.t9488 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t9488 = (function (owner,column_index,column_placeholder_view,meta9489){
this.owner = owner;
this.column_index = column_index;
this.column_placeholder_view = column_placeholder_view;
this.meta9489 = meta9489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t9488.cljs$lang$type = true;
omingard.core.t9488.cljs$lang$ctorStr = "omingard.core/t9488";
omingard.core.t9488.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t9488");
});
omingard.core.t9488.prototype.om$core$IRenderState$ = true;
omingard.core.t9488.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9491){var self__ = this;
var map__9492 = p__9491;var map__9492__$1 = ((cljs.core.seq_QMARK_(map__9492))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9492):map__9492);var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9492__$1,cljs.core.constant$keyword$88);var this$__$1 = this;return React.DOM.li({"onClick": ((function (this$__$1,map__9492,map__9492__$1,channel){
return (function (event){event.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [omingard.core.handle_column_placeholder_click,cljs.core.deref(self__.column_index)], null));
});})(this$__$1,map__9492,map__9492__$1,channel))
, "className": "m-column--placeholder"});
});
omingard.core.t9488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9490){var self__ = this;
var _9490__$1 = this;return self__.meta9489;
});
omingard.core.t9488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9490,meta9489__$1){var self__ = this;
var _9490__$1 = this;return (new omingard.core.t9488(self__.owner,self__.column_index,self__.column_placeholder_view,meta9489__$1));
});
omingard.core.__GT_t9488 = (function __GT_t9488(owner__$1,column_index__$1,column_placeholder_view__$1,meta9489){return (new omingard.core.t9488(owner__$1,column_index__$1,column_placeholder_view__$1,meta9489));
});
}
return (new omingard.core.t9488(owner,column_index,column_placeholder_view,null));
});
omingard.core.card_view = (function card_view(card,owner){if(typeof omingard.core.t9498 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t9498 = (function (owner,card,card_view,meta9499){
this.owner = owner;
this.card = card;
this.card_view = card_view;
this.meta9499 = meta9499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t9498.cljs$lang$type = true;
omingard.core.t9498.cljs$lang$ctorStr = "omingard.core/t9498";
omingard.core.t9498.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t9498");
});
omingard.core.t9498.prototype.om$core$IRenderState$ = true;
omingard.core.t9498.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9501){var self__ = this;
var map__9502 = p__9501;var map__9502__$1 = ((cljs.core.seq_QMARK_(map__9502))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9502):map__9502);var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9502__$1,cljs.core.constant$keyword$88);var this$__$1 = this;return React.DOM.li({"ref": "card", "onTouchEnd": ((function (this$__$1,map__9502,map__9502__$1,channel){
return (function (event){event.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [omingard.core.handle_click,cljs.core.deref(self__.card)], null));
});})(this$__$1,map__9502,map__9502__$1,channel))
, "onClick": ((function (this$__$1,map__9502,map__9502__$1,channel){
return (function (event){event.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [omingard.core.handle_click,cljs.core.deref(self__.card)], null));
});})(this$__$1,map__9502,map__9502__$1,channel))
, "className": ("m-card"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(omingard.core.open_QMARK_(self__.card))?" as-open":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(self__.card))?" as-moving":null)))},React.DOM.span({"className": omingard.core.card_colour(self__.card)},omingard.core.label_for(self__.card)));
});
omingard.core.t9498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9500){var self__ = this;
var _9500__$1 = this;return self__.meta9499;
});
omingard.core.t9498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9500,meta9499__$1){var self__ = this;
var _9500__$1 = this;return (new omingard.core.t9498(self__.owner,self__.card,self__.card_view,meta9499__$1));
});
omingard.core.__GT_t9498 = (function __GT_t9498(owner__$1,card__$1,card_view__$1,meta9499){return (new omingard.core.t9498(owner__$1,card__$1,card_view__$1,meta9499));
});
}
return (new omingard.core.t9498(owner,card,card_view,null));
});
omingard.core.column_view = (function column_view(column,owner){if(typeof omingard.core.t9508 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t9508 = (function (owner,column,column_view,meta9509){
this.owner = owner;
this.column = column;
this.column_view = column_view;
this.meta9509 = meta9509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t9508.cljs$lang$type = true;
omingard.core.t9508.cljs$lang$ctorStr = "omingard.core/t9508";
omingard.core.t9508.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t9508");
});
omingard.core.t9508.prototype.om$core$IRenderState$ = true;
omingard.core.t9508.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9511){var self__ = this;
var map__9512 = p__9511;var map__9512__$1 = ((cljs.core.seq_QMARK_(map__9512))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9512):map__9512);var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9512__$1,cljs.core.constant$keyword$88);var this$__$1 = this;var column_cards = cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(self__.column);return React.DOM.div({"className": "m-column-wrapper"},((cljs.core.seq(column_cards))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"className": "m-column"},om.core.build_all.cljs$core$IFn$_invoke$arity$3(omingard.core.card_view,column_cards,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$88,channel], null)], null))):((cljs.core.constant$keyword$6)?React.DOM.ul({"className": "m-column"},om.core.build.cljs$core$IFn$_invoke$arity$2(omingard.core.column_placeholder_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$80,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(self__.column)], null))):null)));
});
omingard.core.t9508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9510){var self__ = this;
var _9510__$1 = this;return self__.meta9509;
});
omingard.core.t9508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9510,meta9509__$1){var self__ = this;
var _9510__$1 = this;return (new omingard.core.t9508(self__.owner,self__.column,self__.column_view,meta9509__$1));
});
omingard.core.__GT_t9508 = (function __GT_t9508(owner__$1,column__$1,column_view__$1,meta9509){return (new omingard.core.t9508(owner__$1,column__$1,column_view__$1,meta9509));
});
}
return (new omingard.core.t9508(owner,column,column_view,null));
});
omingard.core.columns_view = (function columns_view(columns,owner){if(typeof omingard.core.t9518 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t9518 = (function (owner,columns,columns_view,meta9519){
this.owner = owner;
this.columns = columns;
this.columns_view = columns_view;
this.meta9519 = meta9519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t9518.cljs$lang$type = true;
omingard.core.t9518.cljs$lang$ctorStr = "omingard.core/t9518";
omingard.core.t9518.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t9518");
});
omingard.core.t9518.prototype.om$core$IRenderState$ = true;
omingard.core.t9518.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9521){var self__ = this;
var map__9522 = p__9521;var map__9522__$1 = ((cljs.core.seq_QMARK_(map__9522))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9522):map__9522);var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9522__$1,cljs.core.constant$keyword$88);var this$__$1 = this;return React.DOM.div({"className": "m-columns-wrapper"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"className": "m-columns cf"},om.core.build_all.cljs$core$IFn$_invoke$arity$3(omingard.core.column_view,self__.columns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$88,channel], null)], null))));
});
omingard.core.t9518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9520){var self__ = this;
var _9520__$1 = this;return self__.meta9519;
});
omingard.core.t9518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9520,meta9519__$1){var self__ = this;
var _9520__$1 = this;return (new omingard.core.t9518(self__.owner,self__.columns,self__.columns_view,meta9519__$1));
});
omingard.core.__GT_t9518 = (function __GT_t9518(owner__$1,columns__$1,columns_view__$1,meta9519){return (new omingard.core.t9518(owner__$1,columns__$1,columns_view__$1,meta9519));
});
}
return (new omingard.core.t9518(owner,columns,columns_view,null));
});
omingard.core.navigation_view = (function navigation_view(app,owner){if(typeof omingard.core.t9526 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t9526 = (function (owner,app,navigation_view,meta9527){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta9527 = meta9527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t9526.cljs$lang$type = true;
omingard.core.t9526.cljs$lang$ctorStr = "omingard.core/t9526";
omingard.core.t9526.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t9526");
});
omingard.core.t9526.prototype.om$core$IRender$ = true;
omingard.core.t9526.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "l-navigation-container"},React.DOM.ul({"className": "m-navigation cf"},React.DOM.li({"className": "m-navigation--item"},React.DOM.h1({"className": "m-navigation--title"},"Omingard")),React.DOM.li({"className": "m-navigation--item as-right"},React.DOM.button({"onClick": ((function (this$__$1){
return (function (_){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.app,omingard.core.serve_new_cards);
});})(this$__$1))
, "className": "m-navigation--hit-me"},"Hit me!")),React.DOM.li({"className": "m-navigation--item as-right"},React.DOM.button({"onClick": ((function (this$__$1){
return (function (_){return window.undo();
});})(this$__$1))
, "className": "m-navigation--undo"},"\u21B6 Undo"))));
});
omingard.core.t9526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9528){var self__ = this;
var _9528__$1 = this;return self__.meta9527;
});
omingard.core.t9526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9528,meta9527__$1){var self__ = this;
var _9528__$1 = this;return (new omingard.core.t9526(self__.owner,self__.app,self__.navigation_view,meta9527__$1));
});
omingard.core.__GT_t9526 = (function __GT_t9526(owner__$1,app__$1,navigation_view__$1,meta9527){return (new omingard.core.t9526(owner__$1,app__$1,navigation_view__$1,meta9527));
});
}
return (new omingard.core.t9526(owner,app,navigation_view,null));
});
omingard.core.pile_view = (function pile_view(pile,owner){if(typeof omingard.core.t9534 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t9534 = (function (owner,pile,pile_view,meta9535){
this.owner = owner;
this.pile = pile;
this.pile_view = pile_view;
this.meta9535 = meta9535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t9534.cljs$lang$type = true;
omingard.core.t9534.cljs$lang$ctorStr = "omingard.core/t9534";
omingard.core.t9534.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t9534");
});
omingard.core.t9534.prototype.om$core$IRenderState$ = true;
omingard.core.t9534.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9537){var self__ = this;
var map__9538 = p__9537;var map__9538__$1 = ((cljs.core.seq_QMARK_(map__9538))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9538):map__9538);var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9538__$1,cljs.core.constant$keyword$88);var this$__$1 = this;return React.DOM.li({"className": "m-pile"},(function (){var cards = cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(self__.pile);if(cljs.core.seq(cards))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"className": "m-pile--cards"},om.core.build_all.cljs$core$IFn$_invoke$arity$3(omingard.core.card_view,cards,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$88,channel], null)], null)));
} else
{var suit = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(self__.pile);return React.DOM.span({"className": ("m-pile--placeholder "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(omingard.core.colour(suit)))},omingard.core.symbol_for_suit(suit));
}
})());
});
omingard.core.t9534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9536){var self__ = this;
var _9536__$1 = this;return self__.meta9535;
});
omingard.core.t9534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9536,meta9535__$1){var self__ = this;
var _9536__$1 = this;return (new omingard.core.t9534(self__.owner,self__.pile,self__.pile_view,meta9535__$1));
});
omingard.core.__GT_t9534 = (function __GT_t9534(owner__$1,pile__$1,pile_view__$1,meta9535){return (new omingard.core.t9534(owner__$1,pile__$1,pile_view__$1,meta9535));
});
}
return (new omingard.core.t9534(owner,pile,pile_view,null));
});
omingard.core.piles_view = (function piles_view(piles,owner){if(typeof omingard.core.t9544 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t9544 = (function (owner,piles,piles_view,meta9545){
this.owner = owner;
this.piles = piles;
this.piles_view = piles_view;
this.meta9545 = meta9545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t9544.cljs$lang$type = true;
omingard.core.t9544.cljs$lang$ctorStr = "omingard.core/t9544";
omingard.core.t9544.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t9544");
});
omingard.core.t9544.prototype.om$core$IRenderState$ = true;
omingard.core.t9544.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9547){var self__ = this;
var map__9548 = p__9547;var map__9548__$1 = ((cljs.core.seq_QMARK_(map__9548))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9548):map__9548);var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9548__$1,cljs.core.constant$keyword$88);var this$__$1 = this;return React.DOM.div({"className": "l-piles-container"},React.DOM.h3(null,"Piles"),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"className": "m-piles cf"},om.core.build_all.cljs$core$IFn$_invoke$arity$3(omingard.core.pile_view,self__.piles,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$88,channel], null)], null))));
});
omingard.core.t9544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9546){var self__ = this;
var _9546__$1 = this;return self__.meta9545;
});
omingard.core.t9544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9546,meta9545__$1){var self__ = this;
var _9546__$1 = this;return (new omingard.core.t9544(self__.owner,self__.piles,self__.piles_view,meta9545__$1));
});
omingard.core.__GT_t9544 = (function __GT_t9544(owner__$1,piles__$1,piles_view__$1,meta9545){return (new omingard.core.t9544(owner__$1,piles__$1,piles_view__$1,meta9545));
});
}
return (new omingard.core.t9544(owner,piles,piles_view,null));
});
omingard.core.omingard_view = (function omingard_view(app,owner){if(typeof omingard.core.t9578 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t9578 = (function (owner,app,omingard_view,meta9579){
this.owner = owner;
this.app = app;
this.omingard_view = omingard_view;
this.meta9579 = meta9579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t9578.cljs$lang$type = true;
omingard.core.t9578.cljs$lang$ctorStr = "omingard.core/t9578";
omingard.core.t9578.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t9578");
});
omingard.core.t9578.prototype.om$core$IRenderState$ = true;
omingard.core.t9578.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9581){var self__ = this;
var map__9582 = p__9581;var map__9582__$1 = ((cljs.core.seq_QMARK_(map__9582))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9582):map__9582);var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9582__$1,cljs.core.constant$keyword$88);var this$__$1 = this;return React.DOM.div({"onKeyDown": ((function (this$__$1,map__9582,map__9582__$1,channel){
return (function (event){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),event.keyCode))
{return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.app,omingard.core.serve_new_cards);
} else
{return null;
}
});})(this$__$1,map__9582,map__9582__$1,channel))
, "tabIndex": (0), "className": "omingard-wrapper"},om.core.build.cljs$core$IFn$_invoke$arity$2(omingard.core.navigation_view,self__.app),React.DOM.div({"className": "l-game-container"},om.core.build.cljs$core$IFn$_invoke$arity$3(omingard.core.columns_view,cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$88,channel], null)], null)),React.DOM.div({"className": "l-debug"},React.DOM.h3(null,"Debug (newest click events first)"),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"className": "m-debug-texts"},cljs.core.map_indexed(((function (this$__$1,map__9582,map__9582__$1,channel){
return (function (idx,el){return React.DOM.li({"className": "m-debug-texts--item"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(self__.app)) - idx))+". "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
});})(this$__$1,map__9582,map__9582__$1,channel))
,cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(self__.app)))),om.core.build.cljs$core$IFn$_invoke$arity$3(omingard.core.piles_view,cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$88,channel], null)], null))));
});
omingard.core.t9578.prototype.om$core$IDidMount$ = true;
omingard.core.t9578.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner).focus();
});
omingard.core.t9578.prototype.om$core$IWillMount$ = true;
omingard.core.t9578.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var channel = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$88);var c__6357__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6357__auto__,channel,___$1){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto__,channel,___$1){
return (function (state_9595){var state_val_9596 = (state_9595[(1)]);if((state_val_9596 === (4)))
{var inst_9586 = (state_9595[(2)]);var inst_9587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9586,(0),null);var inst_9588 = cljs.core.nthnext(inst_9586,(1));var inst_9589 = (function (){var attrs = inst_9588;var func = inst_9587;var vec__9584 = inst_9586;return ((function (attrs,func,vec__9584,inst_9586,inst_9587,inst_9588,state_val_9596,c__6357__auto__,channel,___$1){
return (function (xs){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(func,xs,attrs);
});
;})(attrs,func,vec__9584,inst_9586,inst_9587,inst_9588,state_val_9596,c__6357__auto__,channel,___$1))
})();var inst_9590 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.app,inst_9589);var state_9595__$1 = (function (){var statearr_9597 = state_9595;(statearr_9597[(7)] = inst_9590);
return statearr_9597;
})();var statearr_9598_9607 = state_9595__$1;(statearr_9598_9607[(2)] = null);
(statearr_9598_9607[(1)] = (2));
return cljs.core.constant$keyword$15;
} else
{if((state_val_9596 === (3)))
{var inst_9593 = (state_9595[(2)]);var state_9595__$1 = state_9595;return cljs.core.async.impl.ioc_helpers.return_chan(state_9595__$1,inst_9593);
} else
{if((state_val_9596 === (2)))
{var state_9595__$1 = state_9595;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9595__$1,(4),channel);
} else
{if((state_val_9596 === (1)))
{var state_9595__$1 = state_9595;var statearr_9599_9608 = state_9595__$1;(statearr_9599_9608[(2)] = null);
(statearr_9599_9608[(1)] = (2));
return cljs.core.constant$keyword$15;
} else
{return null;
}
}
}
}
});})(c__6357__auto__,channel,___$1))
;return ((function (switch__6342__auto__,c__6357__auto__,channel,___$1){
return (function() {
var state_machine__6343__auto__ = null;
var state_machine__6343__auto____0 = (function (){var statearr_9603 = [null,null,null,null,null,null,null,null];(statearr_9603[(0)] = state_machine__6343__auto__);
(statearr_9603[(1)] = (1));
return statearr_9603;
});
var state_machine__6343__auto____1 = (function (state_9595){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__(state_9595);if(cljs.core.keyword_identical_QMARK_(result__6345__auto__,cljs.core.constant$keyword$15))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e9604){if((e9604 instanceof Object))
{var ex__6346__auto__ = e9604;var statearr_9605_9609 = state_9595;(statearr_9605_9609[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_9595);
return cljs.core.constant$keyword$15;
} else
{if(cljs.core.constant$keyword$6)
{throw e9604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6344__auto__,cljs.core.constant$keyword$15))
{{
var G__9610 = state_9595;
state_9595 = G__9610;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_9595){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_9595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto__,channel,___$1))
})();var state__6359__auto__ = (function (){var statearr_9606 = (f__6358__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6358__auto__.cljs$core$IFn$_invoke$arity$0() : f__6358__auto__.call(null));(statearr_9606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto__);
return statearr_9606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6359__auto__);
});})(c__6357__auto__,channel,___$1))
);
return c__6357__auto__;
});
omingard.core.t9578.prototype.om$core$IInitState$ = true;
omingard.core.t9578.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$88,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);
});
omingard.core.t9578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9580){var self__ = this;
var _9580__$1 = this;return self__.meta9579;
});
omingard.core.t9578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9580,meta9579__$1){var self__ = this;
var _9580__$1 = this;return (new omingard.core.t9578(self__.owner,self__.app,self__.omingard_view,meta9579__$1));
});
omingard.core.__GT_t9578 = (function __GT_t9578(owner__$1,app__$1,omingard_view__$1,meta9579){return (new omingard.core.t9578(owner__$1,app__$1,omingard_view__$1,meta9579));
});
}
return (new omingard.core.t9578(owner,app,omingard_view,null));
});
om.core.root(omingard.core.omingard_view,omingard.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,document.getElementById("omingard")], null));
omingard.core.app_history = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(omingard.core.app_state)], null));
cljs.core.add_watch(omingard.core.app_state,cljs.core.constant$keyword$89,(function (_,___$1,___$2,n){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(cljs.core.deref(omingard.core.app_history)),n))
{return null;
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(omingard.core.app_history,cljs.core.conj,n);
}
}));
(window["undo"] = (function (e){if((cljs.core.count(cljs.core.deref(omingard.core.app_history)) > (1)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(omingard.core.app_history,cljs.core.pop);
return cljs.core.reset_BANG_(omingard.core.app_state,cljs.core.last(cljs.core.deref(omingard.core.app_history)));
} else
{return null;
}
}));

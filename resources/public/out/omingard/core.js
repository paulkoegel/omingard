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
{if(cljs.core.constant$keyword$188)
{return parseInt(literal_value__$1);
} else
{return null;
}
}
}
}
}
});
omingard.core.make_card = (function make_card(card_string){var card_components = clojure.string.split.cljs$core$IFn$_invoke$arity$2(card_string,/\./);var suit = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(card_components));var value = cljs.core.second(card_components);var option = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(card_components)))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.last(card_components)):null);var deck = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([option], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,cljs.core.constant$keyword$248], null)))?option:null);var open = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$249,option))?true:null);var card = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$250,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suit,cljs.core.constant$keyword$253))?cljs.core.constant$keyword$254:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suit,cljs.core.constant$keyword$255))?cljs.core.constant$keyword$256:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suit,cljs.core.constant$keyword$257))?cljs.core.constant$keyword$258:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suit,cljs.core.constant$keyword$259))?cljs.core.constant$keyword$260:null)))),cljs.core.constant$keyword$251,omingard.core.value_from_literal_value(value),cljs.core.constant$keyword$252,(function (){var or__3541__auto__ = deck;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.constant$keyword$247;
}
})()], null);if(cljs.core.truth_(open))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(card,cljs.core.constant$keyword$261,true);
} else
{return card;
}
});
omingard.core.columns_SHARP_ = (9);
omingard.core.suits = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,cljs.core.constant$keyword$260,cljs.core.constant$keyword$254,cljs.core.constant$keyword$256], null);
omingard.core.cards_for_suit = (function cards_for_suit(suit){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$252,cljs.core.constant$keyword$247,cljs.core.constant$keyword$250,suit,cljs.core.constant$keyword$251,value], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$252,cljs.core.constant$keyword$248,cljs.core.constant$keyword$250,suit,cljs.core.constant$keyword$251,value], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(14)));
});
omingard.core.shuffled_stack = (function shuffled_stack(){return cljs.core.shuffle(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(omingard.core.cards_for_suit,omingard.core.suits));
});
omingard.core.piles_for_suits = (function piles_for_suits(suits){return cljs.core.vec(cljs.core.map_indexed((function (idx,suit){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$262,idx,cljs.core.constant$keyword$250,suit,cljs.core.constant$keyword$263,cljs.core.PersistentVector.EMPTY], null);
}),suits));
});
omingard.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$264,omingard.core.shuffled_stack(),cljs.core.constant$keyword$265,omingard.core.piles_for_suits(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (suit){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [suit,suit], null);
}),omingard.core.suits)),cljs.core.constant$keyword$266,cljs.core.vec(cljs.core.map_indexed((function (idx,_){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,idx,cljs.core.constant$keyword$263,cljs.core.PersistentVector.EMPTY], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(omingard.core.columns_SHARP_)))], null));
/**
* @param {...*} var_args
*/
omingard.core.serve_card_to_column = (function() { 
var serve_card_to_column__delegate = function (state,column_index,p__23538){var vec__23540 = p__23538;var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23540,(0),null);var card = cljs.core.peek(cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(state));var card__$1 = (cljs.core.truth_((function (){var and__3529__auto__ = open_QMARK_;if(cljs.core.truth_(and__3529__auto__))
{return card;
} else
{return and__3529__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(card,cljs.core.constant$keyword$261,true):card);if(cljs.core.truth_(card__$1))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264], null),cljs.core.pop),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,column_index,cljs.core.constant$keyword$263], null),cljs.core.conj,card__$1);
} else
{return state;
}
};
var serve_card_to_column = function (state,column_index,var_args){
var p__23538 = null;if (arguments.length > 2) {
  p__23538 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return serve_card_to_column__delegate.call(this,state,column_index,p__23538);};
serve_card_to_column.cljs$lang$maxFixedArity = 2;
serve_card_to_column.cljs$lang$applyTo = (function (arglist__23541){
var state = cljs.core.first(arglist__23541);
arglist__23541 = cljs.core.next(arglist__23541);
var column_index = cljs.core.first(arglist__23541);
var p__23538 = cljs.core.rest(arglist__23541);
return serve_card_to_column__delegate(state,column_index,p__23538);
});
serve_card_to_column.cljs$core$IFn$_invoke$arity$variadic = serve_card_to_column__delegate;
return serve_card_to_column;
})()
;
omingard.core.serve_cards_to_column = (function serve_cards_to_column(state,column_index,n){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (memo,val){return omingard.core.serve_card_to_column.cljs$core$IFn$_invoke$arity$variadic(memo,column_index,cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((n - (1)),val))?true:false)], 0));
}),state,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
omingard.core.serve_cards = (function serve_cards(state){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,p__23544){var vec__23545 = p__23544;var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23545,(0),null);var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23545,(1),null);return omingard.core.serve_cards_to_column(state__$1,idx,n);
}),state,cljs.core.map_indexed(cljs.core.vector,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(4),(3),(2),(1)], null)));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(omingard.core.app_state,omingard.core.serve_cards);
omingard.core.app_history = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(omingard.core.app_state)], null));
cljs.core.add_watch(omingard.core.app_state,cljs.core.constant$keyword$267,(function (_,___$1,___$2,n){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(cljs.core.deref(omingard.core.app_history)),n))
{return null;
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(omingard.core.app_history,cljs.core.conj,n);
}
}));
omingard.core.colour = (function colour(suit){if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([suit], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,cljs.core.constant$keyword$260], null))))
{return "red";
} else
{if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([suit], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,cljs.core.constant$keyword$254], null))))
{return "black";
} else
{return null;
}
}
});
omingard.core.card_colour = (function card_colour(p__23546){var map__23548 = p__23546;var map__23548__$1 = ((cljs.core.seq_QMARK_(map__23548))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23548):map__23548);var suit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23548__$1,cljs.core.constant$keyword$250);return omingard.core.colour(suit);
});
omingard.core.display_value = (function display_value(p__23549){var map__23551 = p__23549;var map__23551__$1 = ((cljs.core.seq_QMARK_(map__23551))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23551):map__23551);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23551__$1,cljs.core.constant$keyword$251);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(1)))
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
omingard.core.symbol_for_suit = (function symbol_for_suit(suit){var G__23553 = (((suit instanceof cljs.core.Keyword))?suit.fqn:null);switch (G__23553) {
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
omingard.core.open_QMARK_ = (function open_QMARK_(card){return cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(card);
});
omingard.core.label_for = (function label_for(card){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(omingard.core.symbol_for_suit(cljs.core.constant$keyword$250.cljs$core$IFn$_invoke$arity$1(card)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(omingard.core.display_value(card))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$252.cljs$core$IFn$_invoke$arity$1(card))+")");
});
omingard.core.unmark_card = (function unmark_card(card){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(card,cljs.core.constant$keyword$268);
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
omingard.core.with_descending_values_QMARK_ = (function with_descending_values_QMARK_(cards){var values = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$251,cards);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(values,cljs.core.vec(cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cards)),(cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cards)) + (1))))));
});
omingard.core.sorted_from_card_QMARK_ = (function sorted_from_card_QMARK_(column_cards,card){var children = omingard.core.children_of(column_cards,card);if(cljs.core.empty_QMARK_(children))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(card,cljs.core.last(column_cards));
} else
{if(cljs.core.constant$keyword$188)
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
omingard.core.free_pile_for = (function free_pile_for(piles,card){return cljs.core.first(cljs.core.filter((function (pile){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$250.cljs$core$IFn$_invoke$arity$1(pile),cljs.core.constant$keyword$250.cljs$core$IFn$_invoke$arity$1(card))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(pile)),(cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(card) - (1))));
}),piles));
});
omingard.core.column_for = (function column_for(columns,card){return cljs.core.first(cljs.core.filter((function (column){return cljs.core.some(cljs.core.PersistentHashSet.fromArray([card], true),cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(column));
}),columns));
});
omingard.core.pile_for = (function pile_for(piles,card){return cljs.core.first(cljs.core.filter((function (pile){return cljs.core.some(cljs.core.PersistentHashSet.fromArray([card], true),cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(pile));
}),piles));
});
omingard.core.discardable_QMARK_ = (function discardable_QMARK_(app,card){var column = omingard.core.column_for(cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(app),card);var and__3529__auto__ = omingard.core.moveable_QMARK_(cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(column),card);if(cljs.core.truth_(and__3529__auto__))
{return omingard.core.free_pile_for(cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(app),card);
} else
{return and__3529__auto__;
}
});
omingard.core.discard_card = (function discard_card(app,card){var column = omingard.core.column_for(cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(app),card);if(cljs.core.truth_(omingard.core.discardable_QMARK_(app,card)))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(column),cljs.core.constant$keyword$263], null),cljs.core.pop),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(omingard.core.free_pile_for(cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(app),card)),cljs.core.constant$keyword$263], null),cljs.core.conj,omingard.core.unmark_card(card)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(column),cljs.core.constant$keyword$263], null),((function (column){
return (function (cards){if(cljs.core.seq(cards))
{return cljs.core.assoc_in(cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(cards) - (1)),cljs.core.constant$keyword$261], null),true);
} else
{return null;
}
});})(column))
);
} else
{if(cljs.core.constant$keyword$188)
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(column),cljs.core.constant$keyword$263,omingard.core.index_for(cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(column),card)], null),omingard.core.unmark_card);
} else
{return null;
}
}
});
omingard.core.path_vector_for_card = (function path_vector_for_card(app,card){var column = omingard.core.column_for(cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(app),card);var pile = omingard.core.pile_for(cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(app),card);if(cljs.core.truth_(column))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(column),cljs.core.constant$keyword$263,omingard.core.index_for(cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(column),card)], null);
} else
{if(cljs.core.truth_(pile))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(pile),cljs.core.constant$keyword$263,omingard.core.index_for(cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(pile),card)], null);
} else
{return null;
}
}
});
omingard.core.first_path = (function first_path(app,card){return cljs.core.first(omingard.core.path_vector_for_card(app,card));
});
omingard.core.where_am_i_QMARK_ = (function where_am_i_QMARK_(app,card){var path = omingard.core.first_path(app,card);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$266,omingard.core.first_path))
{return cljs.core.constant$keyword$269;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$265,omingard.core.first_path))
{return cljs.core.constant$keyword$270;
} else
{if(cljs.core.constant$keyword$188)
{return cljs.core.constant$keyword$264;
} else
{return null;
}
}
}
});
omingard.core.in_columns_QMARK_ = (function in_columns_QMARK_(app,card){var first_path = cljs.core.first(omingard.core.path_vector_for_card(app,card));return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$266,first_path);
});
omingard.core.in_piles_QMARK_ = (function in_piles_QMARK_(app,card){var first_path = cljs.core.first(omingard.core.path_vector_for_card(app,card));return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$265,first_path);
});
omingard.core.in_stack_QMARK_ = (function in_stack_QMARK_(app,card){var first_path = cljs.core.first(omingard.core.path_vector_for_card(app,card));return (first_path == null);
});
omingard.core.mark_card_for_moving = (function mark_card_for_moving(app,card){return cljs.core.assoc_in(app,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(omingard.core.path_vector_for_card(app,card),cljs.core.constant$keyword$268),true);
});
omingard.core.mark_column_card_for_moving = (function mark_column_card_for_moving(app,column_index,card_index){return cljs.core.assoc_in(app,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,column_index,cljs.core.constant$keyword$263,card_index,cljs.core.constant$keyword$268], null),true);
});
omingard.core.mark_card_and_children_for_moving = (function mark_card_and_children_for_moving(app,card){var column = omingard.core.column_for(cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(app),card);var column_cards = cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(column);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (column,column_cards){
return (function (memo,idx){return omingard.core.mark_column_card_for_moving(memo,cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(column),idx);
});})(column,column_cards))
,app,cljs.core.range.cljs$core$IFn$_invoke$arity$2(omingard.core.index_for(column_cards,card),cljs.core.count(column_cards)));
});
omingard.core.all_cards = (function all_cards(app){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (memo,el){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,memo,cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(el));
}),cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(app));
});
omingard.core.cards_marked_for_moving = (function cards_marked_for_moving(app){return cljs.core.filter(cljs.core.constant$keyword$268,omingard.core.all_cards(app));
});
omingard.core.unmark_all_column_cards = (function unmark_all_column_cards(app){var cards_to_unmark = omingard.core.cards_marked_for_moving(app);var columns = cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(app);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cards_to_unmark,columns){
return (function (memo,card){var column = omingard.core.column_for(columns,card);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(memo,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(column),cljs.core.constant$keyword$263,omingard.core.index_for(cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(column),card)], null),((function (column,cards_to_unmark,columns){
return (function (p1__23555_SHARP_){return omingard.core.unmark_card(p1__23555_SHARP_);
});})(column,cards_to_unmark,columns))
);
});})(cards_to_unmark,columns))
,app,cards_to_unmark);
});
omingard.core.can_be_appended_to_QMARK_ = (function can_be_appended_to_QMARK_(card,column){var upper_card = cljs.core.last(cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(column));var lower_card = card;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(upper_card),(cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(lower_card) + (1)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(omingard.core.card_colour(upper_card),omingard.core.card_colour(lower_card)));
});
omingard.core.move_marked_cards_to = (function move_marked_cards_to(app,new_column){var columns = cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(app);var cards_to_move = omingard.core.cards_marked_for_moving(app);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (columns,cards_to_move){
return (function (memo,card){var old_column = omingard.core.column_for(columns,card);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(memo,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(old_column),cljs.core.constant$keyword$263], null),cljs.core.pop),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(old_column),cljs.core.constant$keyword$263], null),((function (old_column,columns,cards_to_move){
return (function (p1__23556_SHARP_){if(cljs.core.seq(p1__23556_SHARP_))
{return cljs.core.assoc_in(p1__23556_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(p1__23556_SHARP_) - (1)),cljs.core.constant$keyword$261], null),true);
} else
{return null;
}
});})(old_column,columns,cards_to_move))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(new_column),cljs.core.constant$keyword$263], null),cljs.core.conj,card);
});})(columns,cards_to_move))
,app,cards_to_move);
});
omingard.core.handle_click = (function handle_click(app,clicked_card){var column = omingard.core.column_for(cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(app),clicked_card);if(cljs.core.truth_((function (){var and__3529__auto__ = cljs.core.not(column);if(and__3529__auto__)
{return omingard.core.open_QMARK_(clicked_card);
} else
{return and__3529__auto__;
}
})()))
{return omingard.core.mark_card_for_moving(app,clicked_card);
} else
{if(cljs.core.truth_(omingard.core.moveable_QMARK_(cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(column),clicked_card)))
{if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([clicked_card], true),omingard.core.cards_marked_for_moving(app))))
{return omingard.core.discard_card(app,clicked_card);
} else
{if(cljs.core.constant$keyword$188)
{if(cljs.core.seq(omingard.core.cards_marked_for_moving(app)))
{console.log("Try to move some cards here");
if(omingard.core.can_be_appended_to_QMARK_(cljs.core.first(omingard.core.cards_marked_for_moving(app)),column))
{console.log("Looks safe, moving!");
return omingard.core.unmark_all_column_cards(omingard.core.move_marked_cards_to(app,omingard.core.column_for(cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(app),clicked_card)));
} else
{console.log("Sorry, cannot move that there, honey!");
return omingard.core.mark_card_and_children_for_moving(omingard.core.unmark_all_column_cards(app),clicked_card);
}
} else
{if(cljs.core.constant$keyword$188)
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
{if(cljs.core.constant$keyword$188)
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
omingard.core.column_placeholder_view = (function column_placeholder_view(column_index,owner){if(typeof omingard.core.t23562 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t23562 = (function (owner,column_index,column_placeholder_view,meta23563){
this.owner = owner;
this.column_index = column_index;
this.column_placeholder_view = column_placeholder_view;
this.meta23563 = meta23563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t23562.cljs$lang$type = true;
omingard.core.t23562.cljs$lang$ctorStr = "omingard.core/t23562";
omingard.core.t23562.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t23562");
});
omingard.core.t23562.prototype.om$core$IRenderState$ = true;
omingard.core.t23562.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__23565){var self__ = this;
var map__23566 = p__23565;var map__23566__$1 = ((cljs.core.seq_QMARK_(map__23566))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23566):map__23566);var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23566__$1,cljs.core.constant$keyword$271);var this$__$1 = this;return React.DOM.li({"onClick": ((function (this$__$1,map__23566,map__23566__$1,channel){
return (function (event){event.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [omingard.core.handle_column_placeholder_click,cljs.core.deref(self__.column_index)], null));
});})(this$__$1,map__23566,map__23566__$1,channel))
, "className": "m-column--placeholder"});
});
omingard.core.t23562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23564){var self__ = this;
var _23564__$1 = this;return self__.meta23563;
});
omingard.core.t23562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23564,meta23563__$1){var self__ = this;
var _23564__$1 = this;return (new omingard.core.t23562(self__.owner,self__.column_index,self__.column_placeholder_view,meta23563__$1));
});
omingard.core.__GT_t23562 = (function __GT_t23562(owner__$1,column_index__$1,column_placeholder_view__$1,meta23563){return (new omingard.core.t23562(owner__$1,column_index__$1,column_placeholder_view__$1,meta23563));
});
}
return (new omingard.core.t23562(owner,column_index,column_placeholder_view,null));
});
omingard.core.card_view = (function card_view(card,owner){if(typeof omingard.core.t23572 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t23572 = (function (owner,card,card_view,meta23573){
this.owner = owner;
this.card = card;
this.card_view = card_view;
this.meta23573 = meta23573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t23572.cljs$lang$type = true;
omingard.core.t23572.cljs$lang$ctorStr = "omingard.core/t23572";
omingard.core.t23572.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t23572");
});
omingard.core.t23572.prototype.om$core$IRenderState$ = true;
omingard.core.t23572.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__23575){var self__ = this;
var map__23576 = p__23575;var map__23576__$1 = ((cljs.core.seq_QMARK_(map__23576))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23576):map__23576);var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23576__$1,cljs.core.constant$keyword$271);var this$__$1 = this;return React.DOM.li({"ref": "card", "onTouchEnd": ((function (this$__$1,map__23576,map__23576__$1,channel){
return (function (event){event.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [omingard.core.handle_click,cljs.core.deref(self__.card)], null));
});})(this$__$1,map__23576,map__23576__$1,channel))
, "onClick": ((function (this$__$1,map__23576,map__23576__$1,channel){
return (function (event){event.preventDefault();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [omingard.core.handle_click,cljs.core.deref(self__.card)], null));
});})(this$__$1,map__23576,map__23576__$1,channel))
, "className": ("m-card"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(omingard.core.open_QMARK_(self__.card))?" as-open":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(self__.card))?" as-moving":null)))},React.DOM.span({"className": omingard.core.card_colour(self__.card)},omingard.core.label_for(self__.card)));
});
omingard.core.t23572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23574){var self__ = this;
var _23574__$1 = this;return self__.meta23573;
});
omingard.core.t23572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23574,meta23573__$1){var self__ = this;
var _23574__$1 = this;return (new omingard.core.t23572(self__.owner,self__.card,self__.card_view,meta23573__$1));
});
omingard.core.__GT_t23572 = (function __GT_t23572(owner__$1,card__$1,card_view__$1,meta23573){return (new omingard.core.t23572(owner__$1,card__$1,card_view__$1,meta23573));
});
}
return (new omingard.core.t23572(owner,card,card_view,null));
});
omingard.core.column_view = (function column_view(column,owner){if(typeof omingard.core.t23582 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t23582 = (function (owner,column,column_view,meta23583){
this.owner = owner;
this.column = column;
this.column_view = column_view;
this.meta23583 = meta23583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t23582.cljs$lang$type = true;
omingard.core.t23582.cljs$lang$ctorStr = "omingard.core/t23582";
omingard.core.t23582.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t23582");
});
omingard.core.t23582.prototype.om$core$IRenderState$ = true;
omingard.core.t23582.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__23585){var self__ = this;
var map__23586 = p__23585;var map__23586__$1 = ((cljs.core.seq_QMARK_(map__23586))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23586):map__23586);var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23586__$1,cljs.core.constant$keyword$271);var this$__$1 = this;var column_cards = cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(self__.column);return React.DOM.div({"className": "m-column-wrapper"},((cljs.core.seq(column_cards))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"className": "m-column"},om.core.build_all.cljs$core$IFn$_invoke$arity$3(omingard.core.card_view,column_cards,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$271,channel], null)], null))):((cljs.core.constant$keyword$188)?React.DOM.ul({"className": "m-column"},om.core.build.cljs$core$IFn$_invoke$arity$2(omingard.core.column_placeholder_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(self__.column)], null))):null)));
});
omingard.core.t23582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23584){var self__ = this;
var _23584__$1 = this;return self__.meta23583;
});
omingard.core.t23582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23584,meta23583__$1){var self__ = this;
var _23584__$1 = this;return (new omingard.core.t23582(self__.owner,self__.column,self__.column_view,meta23583__$1));
});
omingard.core.__GT_t23582 = (function __GT_t23582(owner__$1,column__$1,column_view__$1,meta23583){return (new omingard.core.t23582(owner__$1,column__$1,column_view__$1,meta23583));
});
}
return (new omingard.core.t23582(owner,column,column_view,null));
});
omingard.core.columns_view = (function columns_view(columns,owner){if(typeof omingard.core.t23592 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t23592 = (function (owner,columns,columns_view,meta23593){
this.owner = owner;
this.columns = columns;
this.columns_view = columns_view;
this.meta23593 = meta23593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t23592.cljs$lang$type = true;
omingard.core.t23592.cljs$lang$ctorStr = "omingard.core/t23592";
omingard.core.t23592.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t23592");
});
omingard.core.t23592.prototype.om$core$IRenderState$ = true;
omingard.core.t23592.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__23595){var self__ = this;
var map__23596 = p__23595;var map__23596__$1 = ((cljs.core.seq_QMARK_(map__23596))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23596):map__23596);var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23596__$1,cljs.core.constant$keyword$271);var this$__$1 = this;return React.DOM.div({"className": "m-columns-wrapper"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"className": "m-columns cf"},om.core.build_all.cljs$core$IFn$_invoke$arity$3(omingard.core.column_view,self__.columns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$271,channel], null)], null))));
});
omingard.core.t23592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23594){var self__ = this;
var _23594__$1 = this;return self__.meta23593;
});
omingard.core.t23592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23594,meta23593__$1){var self__ = this;
var _23594__$1 = this;return (new omingard.core.t23592(self__.owner,self__.columns,self__.columns_view,meta23593__$1));
});
omingard.core.__GT_t23592 = (function __GT_t23592(owner__$1,columns__$1,columns_view__$1,meta23593){return (new omingard.core.t23592(owner__$1,columns__$1,columns_view__$1,meta23593));
});
}
return (new omingard.core.t23592(owner,columns,columns_view,null));
});
omingard.core.undo = (function undo(app){if((cljs.core.count(cljs.core.deref(omingard.core.app_history)) > (1)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(omingard.core.app_history,cljs.core.pop);
return cljs.core.reset_BANG_(omingard.core.app_state,cljs.core.last(cljs.core.deref(omingard.core.app_history)));
} else
{return null;
}
});
omingard.core.navigation_view = (function navigation_view(app,owner){if(typeof omingard.core.t23600 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t23600 = (function (owner,app,navigation_view,meta23601){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta23601 = meta23601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t23600.cljs$lang$type = true;
omingard.core.t23600.cljs$lang$ctorStr = "omingard.core/t23600";
omingard.core.t23600.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t23600");
});
omingard.core.t23600.prototype.om$core$IRender$ = true;
omingard.core.t23600.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "l-navigation-container"},React.DOM.ul({"className": "m-navigation cf"},React.DOM.li({"className": "m-navigation--item"},React.DOM.h1({"className": "m-navigation--title"},"Omingard")),React.DOM.li({"className": "m-navigation--item as-right"},React.DOM.button({"onClick": ((function (this$__$1){
return (function (_){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.app,omingard.core.serve_new_cards);
});})(this$__$1))
, "className": "m-navigation--hit-me"},"Hit me!")),React.DOM.li({"className": "m-navigation--item as-right"},React.DOM.button({"onClick": ((function (this$__$1){
return (function (_){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.app,omingard.core.undo);
});})(this$__$1))
, "className": "m-navigation--undo"},"\u21B6 Undo"))));
});
omingard.core.t23600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23602){var self__ = this;
var _23602__$1 = this;return self__.meta23601;
});
omingard.core.t23600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23602,meta23601__$1){var self__ = this;
var _23602__$1 = this;return (new omingard.core.t23600(self__.owner,self__.app,self__.navigation_view,meta23601__$1));
});
omingard.core.__GT_t23600 = (function __GT_t23600(owner__$1,app__$1,navigation_view__$1,meta23601){return (new omingard.core.t23600(owner__$1,app__$1,navigation_view__$1,meta23601));
});
}
return (new omingard.core.t23600(owner,app,navigation_view,null));
});
omingard.core.pile_view = (function pile_view(pile,owner){if(typeof omingard.core.t23608 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t23608 = (function (owner,pile,pile_view,meta23609){
this.owner = owner;
this.pile = pile;
this.pile_view = pile_view;
this.meta23609 = meta23609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t23608.cljs$lang$type = true;
omingard.core.t23608.cljs$lang$ctorStr = "omingard.core/t23608";
omingard.core.t23608.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t23608");
});
omingard.core.t23608.prototype.om$core$IRenderState$ = true;
omingard.core.t23608.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__23611){var self__ = this;
var map__23612 = p__23611;var map__23612__$1 = ((cljs.core.seq_QMARK_(map__23612))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23612):map__23612);var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23612__$1,cljs.core.constant$keyword$271);var this$__$1 = this;return React.DOM.li({"className": "m-pile"},(function (){var cards = cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(self__.pile);if(cljs.core.seq(cards))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"className": "m-pile--cards"},om.core.build_all.cljs$core$IFn$_invoke$arity$3(omingard.core.card_view,cards,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$271,channel], null)], null)));
} else
{var suit = cljs.core.constant$keyword$250.cljs$core$IFn$_invoke$arity$1(self__.pile);return React.DOM.span({"className": ("m-pile--placeholder "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(omingard.core.colour(suit)))},omingard.core.symbol_for_suit(suit));
}
})());
});
omingard.core.t23608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23610){var self__ = this;
var _23610__$1 = this;return self__.meta23609;
});
omingard.core.t23608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23610,meta23609__$1){var self__ = this;
var _23610__$1 = this;return (new omingard.core.t23608(self__.owner,self__.pile,self__.pile_view,meta23609__$1));
});
omingard.core.__GT_t23608 = (function __GT_t23608(owner__$1,pile__$1,pile_view__$1,meta23609){return (new omingard.core.t23608(owner__$1,pile__$1,pile_view__$1,meta23609));
});
}
return (new omingard.core.t23608(owner,pile,pile_view,null));
});
omingard.core.piles_view = (function piles_view(piles,owner){if(typeof omingard.core.t23618 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t23618 = (function (owner,piles,piles_view,meta23619){
this.owner = owner;
this.piles = piles;
this.piles_view = piles_view;
this.meta23619 = meta23619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t23618.cljs$lang$type = true;
omingard.core.t23618.cljs$lang$ctorStr = "omingard.core/t23618";
omingard.core.t23618.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t23618");
});
omingard.core.t23618.prototype.om$core$IRenderState$ = true;
omingard.core.t23618.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__23621){var self__ = this;
var map__23622 = p__23621;var map__23622__$1 = ((cljs.core.seq_QMARK_(map__23622))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23622):map__23622);var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23622__$1,cljs.core.constant$keyword$271);var this$__$1 = this;return React.DOM.div({"className": "l-piles-container"},React.DOM.h3(null,"Piles"),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"className": "m-piles cf"},om.core.build_all.cljs$core$IFn$_invoke$arity$3(omingard.core.pile_view,self__.piles,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$271,channel], null)], null))));
});
omingard.core.t23618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23620){var self__ = this;
var _23620__$1 = this;return self__.meta23619;
});
omingard.core.t23618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23620,meta23619__$1){var self__ = this;
var _23620__$1 = this;return (new omingard.core.t23618(self__.owner,self__.piles,self__.piles_view,meta23619__$1));
});
omingard.core.__GT_t23618 = (function __GT_t23618(owner__$1,piles__$1,piles_view__$1,meta23619){return (new omingard.core.t23618(owner__$1,piles__$1,piles_view__$1,meta23619));
});
}
return (new omingard.core.t23618(owner,piles,piles_view,null));
});
omingard.core.omingard_view = (function omingard_view(app,owner){if(typeof omingard.core.t23652 !== 'undefined')
{} else
{
/**
* @constructor
*/
omingard.core.t23652 = (function (owner,app,omingard_view,meta23653){
this.owner = owner;
this.app = app;
this.omingard_view = omingard_view;
this.meta23653 = meta23653;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omingard.core.t23652.cljs$lang$type = true;
omingard.core.t23652.cljs$lang$ctorStr = "omingard.core/t23652";
omingard.core.t23652.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"omingard.core/t23652");
});
omingard.core.t23652.prototype.om$core$IRenderState$ = true;
omingard.core.t23652.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__23655){var self__ = this;
var map__23656 = p__23655;var map__23656__$1 = ((cljs.core.seq_QMARK_(map__23656))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23656):map__23656);var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23656__$1,cljs.core.constant$keyword$271);var this$__$1 = this;return React.DOM.div({"onKeyDown": ((function (this$__$1,map__23656,map__23656__$1,channel){
return (function (event){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),event.keyCode))
{return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.app,omingard.core.serve_new_cards);
} else
{return null;
}
});})(this$__$1,map__23656,map__23656__$1,channel))
, "tabIndex": (0), "className": "omingard-wrapper"},om.core.build.cljs$core$IFn$_invoke$arity$2(omingard.core.navigation_view,self__.app),React.DOM.div({"className": "l-game-container"},om.core.build.cljs$core$IFn$_invoke$arity$3(omingard.core.columns_view,cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$271,channel], null)], null)),om.core.build.cljs$core$IFn$_invoke$arity$3(omingard.core.piles_view,cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$271,channel], null)], null))));
});
omingard.core.t23652.prototype.om$core$IDidMount$ = true;
omingard.core.t23652.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner).focus();
});
omingard.core.t23652.prototype.om$core$IWillMount$ = true;
omingard.core.t23652.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var channel = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$271);var c__6357__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6357__auto__,channel,___$1){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto__,channel,___$1){
return (function (state_23669){var state_val_23670 = (state_23669[(1)]);if((state_val_23670 === (4)))
{var inst_23660 = (state_23669[(2)]);var inst_23661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23660,(0),null);var inst_23662 = cljs.core.nthnext(inst_23660,(1));var inst_23663 = (function (){var attrs = inst_23662;var func = inst_23661;var vec__23658 = inst_23660;return ((function (attrs,func,vec__23658,inst_23660,inst_23661,inst_23662,state_val_23670,c__6357__auto__,channel,___$1){
return (function (xs){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(func,xs,attrs);
});
;})(attrs,func,vec__23658,inst_23660,inst_23661,inst_23662,state_val_23670,c__6357__auto__,channel,___$1))
})();var inst_23664 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.app,inst_23663);var state_23669__$1 = (function (){var statearr_23671 = state_23669;(statearr_23671[(7)] = inst_23664);
return statearr_23671;
})();var statearr_23672_23681 = state_23669__$1;(statearr_23672_23681[(2)] = null);
(statearr_23672_23681[(1)] = (2));
return cljs.core.constant$keyword$197;
} else
{if((state_val_23670 === (3)))
{var inst_23667 = (state_23669[(2)]);var state_23669__$1 = state_23669;return cljs.core.async.impl.ioc_helpers.return_chan(state_23669__$1,inst_23667);
} else
{if((state_val_23670 === (2)))
{var state_23669__$1 = state_23669;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23669__$1,(4),channel);
} else
{if((state_val_23670 === (1)))
{var state_23669__$1 = state_23669;var statearr_23673_23682 = state_23669__$1;(statearr_23673_23682[(2)] = null);
(statearr_23673_23682[(1)] = (2));
return cljs.core.constant$keyword$197;
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
var state_machine__6343__auto____0 = (function (){var statearr_23677 = [null,null,null,null,null,null,null,null];(statearr_23677[(0)] = state_machine__6343__auto__);
(statearr_23677[(1)] = (1));
return statearr_23677;
});
var state_machine__6343__auto____1 = (function (state_23669){while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__(state_23669);if(cljs.core.keyword_identical_QMARK_(result__6345__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__6345__auto__;
}
break;
}
}catch (e23678){if((e23678 instanceof Object))
{var ex__6346__auto__ = e23678;var statearr_23679_23683 = state_23669;(statearr_23679_23683[(5)] = ex__6346__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23669);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$188)
{throw e23678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6344__auto__,cljs.core.constant$keyword$197))
{{
var G__23684 = state_23669;
state_23669 = G__23684;
continue;
}
} else
{return ret_value__6344__auto__;
}
break;
}
});
state_machine__6343__auto__ = function(state_23669){
switch(arguments.length){
case 0:
return state_machine__6343__auto____0.call(this);
case 1:
return state_machine__6343__auto____1.call(this,state_23669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6343__auto____0;
state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6343__auto____1;
return state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6357__auto__,channel,___$1))
})();var state__6359__auto__ = (function (){var statearr_23680 = (f__6358__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6358__auto__.cljs$core$IFn$_invoke$arity$0() : f__6358__auto__.call(null));(statearr_23680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto__);
return statearr_23680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6359__auto__);
});})(c__6357__auto__,channel,___$1))
);
return c__6357__auto__;
});
omingard.core.t23652.prototype.om$core$IInitState$ = true;
omingard.core.t23652.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$271,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);
});
omingard.core.t23652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23654){var self__ = this;
var _23654__$1 = this;return self__.meta23653;
});
omingard.core.t23652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23654,meta23653__$1){var self__ = this;
var _23654__$1 = this;return (new omingard.core.t23652(self__.owner,self__.app,self__.omingard_view,meta23653__$1));
});
omingard.core.__GT_t23652 = (function __GT_t23652(owner__$1,app__$1,omingard_view__$1,meta23653){return (new omingard.core.t23652(owner__$1,app__$1,omingard_view__$1,meta23653));
});
}
return (new omingard.core.t23652(owner,app,omingard_view,null));
});
om.core.root(omingard.core.omingard_view,omingard.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$241,document.getElementById("omingard")], null));

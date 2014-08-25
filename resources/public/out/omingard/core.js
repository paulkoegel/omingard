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
cljs.core.enable_console_print_BANG_.call(null);
React.initializeTouchEvents(true);
omingard.core.debugg = (function debugg(app,text){return cljs.core.update_in.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug-texts","debug-texts",-1596002918)], null),(function (a){return cljs.core.cons.call(null,text,a);
}));
});
omingard.core.value_from_literal_value = (function value_from_literal_value(literal_value){var literal_value__$1 = clojure.string.lower_case.call(null,literal_value);if(cljs.core._EQ_.call(null,literal_value__$1,"a"))
{return (1);
} else
{if(cljs.core._EQ_.call(null,literal_value__$1,"j"))
{return (11);
} else
{if(cljs.core._EQ_.call(null,literal_value__$1,"q"))
{return (12);
} else
{if(cljs.core._EQ_.call(null,literal_value__$1,"k"))
{return (13);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return parseInt(literal_value__$1);
} else
{return null;
}
}
}
}
}
});
omingard.core.make_card = (function make_card(card_string){var card_components = clojure.string.split.call(null,card_string,/\./);var suit = cljs.core.keyword.call(null,cljs.core.first.call(null,card_components));var value = cljs.core.second.call(null,card_components);var option = ((cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,card_components)))?cljs.core.keyword.call(null,cljs.core.last.call(null,card_components)):null);var deck = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([option], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)))?option:null);var open = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),option))?true:null);var card = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"suit","suit",-869827520),((cljs.core._EQ_.call(null,suit,new cljs.core.Keyword(null,"s","s",1705939918)))?new cljs.core.Keyword(null,"spades","spades",1715303139):((cljs.core._EQ_.call(null,suit,new cljs.core.Keyword(null,"c","c",-1763192079)))?new cljs.core.Keyword(null,"clubs","clubs",-1540603567):((cljs.core._EQ_.call(null,suit,new cljs.core.Keyword(null,"h","h",1109658740)))?new cljs.core.Keyword(null,"hearts","hearts",-701365391):((cljs.core._EQ_.call(null,suit,new cljs.core.Keyword(null,"d","d",1972142424)))?new cljs.core.Keyword(null,"diamonds","diamonds",-145346074):null)))),new cljs.core.Keyword(null,"value","value",305978217),omingard.core.value_from_literal_value.call(null,value),new cljs.core.Keyword(null,"deck","deck",1145325705),(function (){var or__3541__auto__ = deck;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return new cljs.core.Keyword(null,"a","a",-2123407586);
}
})()], null);if(cljs.core.truth_(open))
{return cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"open","open",-1763596448),true);
} else
{return card;
}
});
omingard.core.columns_SHARP_ = (9);
omingard.core.suits = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hearts","hearts",-701365391),new cljs.core.Keyword(null,"diamonds","diamonds",-145346074),new cljs.core.Keyword(null,"spades","spades",1715303139),new cljs.core.Keyword(null,"clubs","clubs",-1540603567)], null);
omingard.core.cards_for_suit = (function cards_for_suit(suit){return cljs.core.mapcat.call(null,(function (value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"suit","suit",-869827520),suit,new cljs.core.Keyword(null,"value","value",305978217),value], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"suit","suit",-869827520),suit,new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
}),cljs.core.range.call(null,(1),(14)));
});
omingard.core.shuffled_stack = (function shuffled_stack(){return cljs.core.shuffle.call(null,cljs.core.mapcat.call(null,omingard.core.cards_for_suit,omingard.core.suits));
});
omingard.core.piles_for_suits = (function piles_for_suits(suits){return cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (idx,suit){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),idx,new cljs.core.Keyword(null,"suit","suit",-869827520),suit,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentVector.EMPTY], null);
}),suits));
});
omingard.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stack","stack",-793405930),omingard.core.shuffled_stack.call(null),new cljs.core.Keyword(null,"piles","piles",1943114450),omingard.core.piles_for_suits.call(null,cljs.core.mapcat.call(null,(function (suit){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [suit,suit], null);
}),omingard.core.suits)),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (idx,_){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),idx,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentVector.EMPTY], null);
}),cljs.core.range.call(null,omingard.core.columns_SHARP_))),new cljs.core.Keyword(null,"debug-texts","debug-texts",-1596002918),cljs.core.PersistentVector.EMPTY], null));
/**
* @param {...*} var_args
*/
omingard.core.serve_card_to_column = (function() { 
var serve_card_to_column__delegate = function (state,column_index,p__9464){var vec__9466 = p__9464;var open_QMARK_ = cljs.core.nth.call(null,vec__9466,(0),null);var card = cljs.core.peek.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(state));var card__$1 = (cljs.core.truth_((function (){var and__3529__auto__ = open_QMARK_;if(cljs.core.truth_(and__3529__auto__))
{return card;
} else
{return and__3529__auto__;
}
})())?cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"open","open",-1763596448),true):card);if(cljs.core.truth_(card__$1))
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stack","stack",-793405930)], null),cljs.core.pop),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"cards","cards",169174038)], null),cljs.core.conj,card__$1);
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
omingard.core.serve_cards_to_column = (function serve_cards_to_column(state,column_index,n){return cljs.core.reduce.call(null,(function (memo,val){return omingard.core.serve_card_to_column.call(null,memo,column_index,((cljs.core._EQ_.call(null,(n - (1)),val))?true:false));
}),state,cljs.core.range.call(null,n));
});
omingard.core.serve_cards = (function serve_cards(state){return cljs.core.reduce.call(null,(function (state__$1,p__9470){var vec__9471 = p__9470;var idx = cljs.core.nth.call(null,vec__9471,(0),null);var n = cljs.core.nth.call(null,vec__9471,(1),null);return omingard.core.serve_cards_to_column.call(null,state__$1,idx,n);
}),state,cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(4),(3),(2),(1)], null)));
});
cljs.core.swap_BANG_.call(null,omingard.core.app_state,omingard.core.serve_cards);
omingard.core.colour = (function colour(suit){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([suit], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hearts","hearts",-701365391),new cljs.core.Keyword(null,"diamonds","diamonds",-145346074)], null))))
{return "red";
} else
{if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([suit], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clubs","clubs",-1540603567),new cljs.core.Keyword(null,"spades","spades",1715303139)], null))))
{return "black";
} else
{return null;
}
}
});
omingard.core.card_colour = (function card_colour(p__9472){var map__9474 = p__9472;var map__9474__$1 = ((cljs.core.seq_QMARK_.call(null,map__9474))?cljs.core.apply.call(null,cljs.core.hash_map,map__9474):map__9474);var suit = cljs.core.get.call(null,map__9474__$1,new cljs.core.Keyword(null,"suit","suit",-869827520));return omingard.core.colour.call(null,suit);
});
omingard.core.display_value = (function display_value(p__9475){var map__9477 = p__9475;var map__9477__$1 = ((cljs.core.seq_QMARK_.call(null,map__9477))?cljs.core.apply.call(null,cljs.core.hash_map,map__9477):map__9477);var value = cljs.core.get.call(null,map__9477__$1,new cljs.core.Keyword(null,"value","value",305978217));if(cljs.core._EQ_.call(null,value,(1)))
{return "A";
} else
{if(((value > (0))) && ((value < (11))))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
} else
{if(cljs.core._EQ_.call(null,value,(11)))
{return "J";
} else
{if(cljs.core._EQ_.call(null,value,(12)))
{return "Q";
} else
{if(cljs.core._EQ_.call(null,value,(13)))
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
omingard.core.open_QMARK_ = (function open_QMARK_(card){return new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(card);
});
omingard.core.label_for = (function label_for(card){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(omingard.core.symbol_for_suit.call(null,new cljs.core.Keyword(null,"suit","suit",-869827520).cljs$core$IFn$_invoke$arity$1(card)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(omingard.core.display_value.call(null,card))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"deck","deck",1145325705).cljs$core$IFn$_invoke$arity$1(card))+")");
});
omingard.core.unmark_card = (function unmark_card(card){return cljs.core.dissoc.call(null,card,new cljs.core.Keyword(null,"moving","moving",1760797240));
});
omingard.core.index_for = (function index_for(vektor,card){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (idx,el){if(cljs.core._EQ_.call(null,el,card))
{return idx;
} else
{return null;
}
}),vektor));
});
omingard.core.children_of = (function children_of(column_cards,card){return cljs.core.vec.call(null,cljs.core.rest.call(null,cljs.core.drop_while.call(null,(function (el){return cljs.core.not_EQ_.call(null,el,card);
}),column_cards)));
});
omingard.core.with_alternating_colours_QMARK_ = (function with_alternating_colours_QMARK_(cards){var colours = cljs.core.map.call(null,omingard.core.card_colour,cards);return cljs.core.boolean$.call(null,cljs.core.reduce.call(null,((function (colours){
return (function (memo,colour){if(!(cljs.core._EQ_.call(null,memo,colour)))
{return colour;
} else
{return cljs.core.reduced.call(null,false);
}
});})(colours))
,cljs.core.first.call(null,colours),cljs.core.rest.call(null,colours)));
});
omingard.core.with_descending_values_QMARK_ = (function with_descending_values_QMARK_(cards){var values = cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cards);return cljs.core._EQ_.call(null,values,cljs.core.vec.call(null,cljs.core.reverse.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cards)),(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cards)) + (1))))));
});
omingard.core.sorted_from_card_QMARK_ = (function sorted_from_card_QMARK_(column_cards,card){var children = omingard.core.children_of.call(null,column_cards,card);if(cljs.core.empty_QMARK_.call(null,children))
{return cljs.core._EQ_.call(null,card,cljs.core.last.call(null,column_cards));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var cards = cljs.core.cons.call(null,card,children);return (omingard.core.with_descending_values_QMARK_.call(null,cards)) && (omingard.core.with_alternating_colours_QMARK_.call(null,cards));
} else
{return null;
}
}
});
omingard.core.moveable_QMARK_ = (function moveable_QMARK_(column_cards,card){var and__3529__auto__ = omingard.core.open_QMARK_.call(null,card);if(cljs.core.truth_(and__3529__auto__))
{return omingard.core.sorted_from_card_QMARK_.call(null,column_cards,card);
} else
{return and__3529__auto__;
}
});
omingard.core.free_pile_for = (function free_pile_for(piles,card){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (pile){return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"suit","suit",-869827520).cljs$core$IFn$_invoke$arity$1(pile),new cljs.core.Keyword(null,"suit","suit",-869827520).cljs$core$IFn$_invoke$arity$1(card))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(pile)),(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(card) - (1))));
}),piles));
});
omingard.core.column_for = (function column_for(columns,card){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (column){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([card], true),new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(column));
}),columns));
});
omingard.core.pile_for = (function pile_for(piles,card){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (pile){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([card], true),new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(pile));
}),piles));
});
omingard.core.discardable_QMARK_ = (function discardable_QMARK_(app,card){var column = omingard.core.column_for.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(app),card);var and__3529__auto__ = omingard.core.moveable_QMARK_.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(column),card);if(cljs.core.truth_(and__3529__auto__))
{return omingard.core.free_pile_for.call(null,new cljs.core.Keyword(null,"piles","piles",1943114450).cljs$core$IFn$_invoke$arity$1(app),card);
} else
{return and__3529__auto__;
}
});
omingard.core.discard_card = (function discard_card(app,card){var column = omingard.core.column_for.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(app),card);if(cljs.core.truth_(omingard.core.discardable_QMARK_.call(null,app,card)))
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"cards","cards",169174038)], null),cljs.core.pop),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piles","piles",1943114450),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(omingard.core.free_pile_for.call(null,new cljs.core.Keyword(null,"piles","piles",1943114450).cljs$core$IFn$_invoke$arity$1(app),card)),new cljs.core.Keyword(null,"cards","cards",169174038)], null),cljs.core.conj,omingard.core.unmark_card.call(null,card)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"cards","cards",169174038)], null),((function (column){
return (function (cards){if(cljs.core.seq.call(null,cards))
{return cljs.core.assoc_in.call(null,cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cards) - (1)),new cljs.core.Keyword(null,"open","open",-1763596448)], null),true);
} else
{return null;
}
});})(column))
);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.update_in.call(null,app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"cards","cards",169174038),omingard.core.index_for.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(column),card)], null),omingard.core.unmark_card);
} else
{return null;
}
}
});
omingard.core.path_vector_for_card = (function path_vector_for_card(app,card){var column = omingard.core.column_for.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(app),card);var pile = omingard.core.pile_for.call(null,new cljs.core.Keyword(null,"piles","piles",1943114450).cljs$core$IFn$_invoke$arity$1(app),card);if(cljs.core.truth_(column))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"cards","cards",169174038),omingard.core.index_for.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(column),card)], null);
} else
{if(cljs.core.truth_(pile))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piles","piles",1943114450),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(pile),new cljs.core.Keyword(null,"cards","cards",169174038),omingard.core.index_for.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(pile),card)], null);
} else
{return null;
}
}
});
omingard.core.first_path = (function first_path(app,card){return cljs.core.first.call(null,omingard.core.path_vector_for_card.call(null,app,card));
});
omingard.core.where_am_i_QMARK_ = (function where_am_i_QMARK_(app,card){var path = omingard.core.first_path.call(null,app,card);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288),omingard.core.first_path))
{return new cljs.core.Keyword(null,"column","column",2078222095);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"piles","piles",1943114450),omingard.core.first_path))
{return new cljs.core.Keyword(null,"pile","pile",125244947);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return new cljs.core.Keyword(null,"stack","stack",-793405930);
} else
{return null;
}
}
}
});
omingard.core.in_columns_QMARK_ = (function in_columns_QMARK_(app,card){var first_path = cljs.core.first.call(null,omingard.core.path_vector_for_card.call(null,app,card));return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288),first_path);
});
omingard.core.in_piles_QMARK_ = (function in_piles_QMARK_(app,card){var first_path = cljs.core.first.call(null,omingard.core.path_vector_for_card.call(null,app,card));return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"piles","piles",1943114450),first_path);
});
omingard.core.in_stack_QMARK_ = (function in_stack_QMARK_(app,card){var first_path = cljs.core.first.call(null,omingard.core.path_vector_for_card.call(null,app,card));return (first_path == null);
});
omingard.core.mark_card_for_moving = (function mark_card_for_moving(app,card){return cljs.core.assoc_in.call(null,app,cljs.core.conj.call(null,omingard.core.path_vector_for_card.call(null,app,card),new cljs.core.Keyword(null,"moving","moving",1760797240)),true);
});
omingard.core.mark_column_card_for_moving = (function mark_column_card_for_moving(app,column_index,card_index){return cljs.core.assoc_in.call(null,app,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"cards","cards",169174038),card_index,new cljs.core.Keyword(null,"moving","moving",1760797240)], null),true);
});
omingard.core.mark_card_and_children_for_moving = (function mark_card_and_children_for_moving(app,card){var column = omingard.core.column_for.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(app),card);var column_cards = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(column);return cljs.core.reduce.call(null,((function (column,column_cards){
return (function (memo,idx){return omingard.core.mark_column_card_for_moving.call(null,memo,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(column),idx);
});})(column,column_cards))
,app,cljs.core.range.call(null,omingard.core.index_for.call(null,column_cards,card),cljs.core.count.call(null,column_cards)));
});
omingard.core.all_cards = (function all_cards(app){return cljs.core.reduce.call(null,(function (memo,el){return cljs.core.apply.call(null,cljs.core.conj,memo,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(el));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(app));
});
omingard.core.cards_marked_for_moving = (function cards_marked_for_moving(app){return cljs.core.filter.call(null,new cljs.core.Keyword(null,"moving","moving",1760797240),omingard.core.all_cards.call(null,app));
});
omingard.core.unmark_all_column_cards = (function unmark_all_column_cards(app){var cards_to_unmark = omingard.core.cards_marked_for_moving.call(null,app);var columns = new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(app);return cljs.core.reduce.call(null,((function (cards_to_unmark,columns){
return (function (memo,card){var column = omingard.core.column_for.call(null,columns,card);return cljs.core.update_in.call(null,memo,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"cards","cards",169174038),omingard.core.index_for.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(column),card)], null),((function (column,cards_to_unmark,columns){
return (function (p1__9481_SHARP_){return omingard.core.unmark_card.call(null,p1__9481_SHARP_);
});})(column,cards_to_unmark,columns))
);
});})(cards_to_unmark,columns))
,app,cards_to_unmark);
});
omingard.core.can_be_appended_to_QMARK_ = (function can_be_appended_to_QMARK_(card,column){var upper_card = cljs.core.last.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(column));var lower_card = card;return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(upper_card),(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(lower_card) + (1)))) && (cljs.core.not_EQ_.call(null,omingard.core.card_colour.call(null,upper_card),omingard.core.card_colour.call(null,lower_card)));
});
omingard.core.move_marked_cards_to = (function move_marked_cards_to(app,new_column){var columns = new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(app);var cards_to_move = omingard.core.cards_marked_for_moving.call(null,app);return cljs.core.reduce.call(null,((function (columns,cards_to_move){
return (function (memo,card){var old_column = omingard.core.column_for.call(null,columns,card);return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,memo,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(old_column),new cljs.core.Keyword(null,"cards","cards",169174038)], null),cljs.core.pop),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(old_column),new cljs.core.Keyword(null,"cards","cards",169174038)], null),((function (old_column,columns,cards_to_move){
return (function (p1__9482_SHARP_){if(cljs.core.seq.call(null,p1__9482_SHARP_))
{return cljs.core.assoc_in.call(null,p1__9482_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,p1__9482_SHARP_) - (1)),new cljs.core.Keyword(null,"open","open",-1763596448)], null),true);
} else
{return null;
}
});})(old_column,columns,cards_to_move))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(new_column),new cljs.core.Keyword(null,"cards","cards",169174038)], null),cljs.core.conj,card);
});})(columns,cards_to_move))
,app,cards_to_move);
});
omingard.core.handle_click = (function handle_click(app,clicked_card){var column = omingard.core.column_for.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(app),clicked_card);if(cljs.core.truth_((function (){var and__3529__auto__ = cljs.core.not.call(null,column);if(and__3529__auto__)
{return omingard.core.open_QMARK_.call(null,clicked_card);
} else
{return and__3529__auto__;
}
})()))
{return omingard.core.mark_card_for_moving.call(null,app,clicked_card);
} else
{if(cljs.core.truth_(omingard.core.moveable_QMARK_.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(column),clicked_card)))
{if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([clicked_card], true),omingard.core.cards_marked_for_moving.call(null,app))))
{return omingard.core.discard_card.call(null,app,clicked_card);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{if(cljs.core.seq.call(null,omingard.core.cards_marked_for_moving.call(null,app)))
{console.log("Try to move some cards here");
if(omingard.core.can_be_appended_to_QMARK_.call(null,cljs.core.first.call(null,omingard.core.cards_marked_for_moving.call(null,app)),column))
{console.log("Looks safe, moving!");
return omingard.core.unmark_all_column_cards.call(null,omingard.core.move_marked_cards_to.call(null,app,omingard.core.column_for.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(app),clicked_card)));
} else
{console.log("Sorry, cannot move that there, honey!");
return omingard.core.mark_card_and_children_for_moving.call(null,omingard.core.unmark_all_column_cards.call(null,app),clicked_card);
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{console.log("no cards marked for moving");
return omingard.core.mark_card_and_children_for_moving.call(null,app,clicked_card);
} else
{return null;
}
}
} else
{return null;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return app;
} else
{return null;
}
}
}
});
omingard.core.serve_new_cards = (function serve_new_cards(app){var app__$1 = omingard.core.unmark_all_column_cards.call(null,app);return cljs.core.reduce.call(null,((function (app__$1){
return (function (memo,i){return omingard.core.serve_card_to_column.call(null,memo,i,true);
});})(app__$1))
,app__$1,cljs.core.range.call(null,omingard.core.columns_SHARP_));
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
omingard.core.t9488.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"omingard.core/t9488");
});
omingard.core.t9488.prototype.om$core$IRenderState$ = true;
omingard.core.t9488.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9491){var self__ = this;
var map__9492 = p__9491;var map__9492__$1 = ((cljs.core.seq_QMARK_.call(null,map__9492))?cljs.core.apply.call(null,cljs.core.hash_map,map__9492):map__9492);var channel = cljs.core.get.call(null,map__9492__$1,new cljs.core.Keyword(null,"channel","channel",734187692));var this$__$1 = this;return React.DOM.li({"onClick": ((function (this$__$1,map__9492,map__9492__$1,channel){
return (function (event){event.preventDefault();
return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [omingard.core.handle_column_placeholder_click,cljs.core.deref.call(null,self__.column_index)], null));
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
omingard.core.t9498.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"omingard.core/t9498");
});
omingard.core.t9498.prototype.om$core$IRenderState$ = true;
omingard.core.t9498.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9501){var self__ = this;
var map__9502 = p__9501;var map__9502__$1 = ((cljs.core.seq_QMARK_.call(null,map__9502))?cljs.core.apply.call(null,cljs.core.hash_map,map__9502):map__9502);var channel = cljs.core.get.call(null,map__9502__$1,new cljs.core.Keyword(null,"channel","channel",734187692));var this$__$1 = this;return React.DOM.li({"ref": "card", "onTouchEnd": ((function (this$__$1,map__9502,map__9502__$1,channel){
return (function (event){event.preventDefault();
return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [omingard.core.handle_click,cljs.core.deref.call(null,self__.card)], null));
});})(this$__$1,map__9502,map__9502__$1,channel))
, "onClick": ((function (this$__$1,map__9502,map__9502__$1,channel){
return (function (event){event.preventDefault();
return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [omingard.core.handle_click,cljs.core.deref.call(null,self__.card)], null));
});})(this$__$1,map__9502,map__9502__$1,channel))
, "className": ("m-card"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(omingard.core.open_QMARK_.call(null,self__.card))?" as-open":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"moving","moving",1760797240).cljs$core$IFn$_invoke$arity$1(self__.card))?" as-moving":null)))},React.DOM.span({"className": omingard.core.card_colour.call(null,self__.card)},omingard.core.label_for.call(null,self__.card)));
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
omingard.core.t9508.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"omingard.core/t9508");
});
omingard.core.t9508.prototype.om$core$IRenderState$ = true;
omingard.core.t9508.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9511){var self__ = this;
var map__9512 = p__9511;var map__9512__$1 = ((cljs.core.seq_QMARK_.call(null,map__9512))?cljs.core.apply.call(null,cljs.core.hash_map,map__9512):map__9512);var channel = cljs.core.get.call(null,map__9512__$1,new cljs.core.Keyword(null,"channel","channel",734187692));var this$__$1 = this;var column_cards = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(self__.column);return React.DOM.div({"className": "m-column-wrapper"},((cljs.core.seq.call(null,column_cards))?cljs.core.apply.call(null,om.dom.ul,{"className": "m-column"},om.core.build_all.call(null,omingard.core.card_view,column_cards,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),channel], null)], null))):((new cljs.core.Keyword(null,"else","else",-1508377146))?React.DOM.ul({"className": "m-column"},om.core.build.call(null,omingard.core.column_placeholder_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(self__.column)], null))):null)));
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
omingard.core.t9518.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"omingard.core/t9518");
});
omingard.core.t9518.prototype.om$core$IRenderState$ = true;
omingard.core.t9518.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9521){var self__ = this;
var map__9522 = p__9521;var map__9522__$1 = ((cljs.core.seq_QMARK_.call(null,map__9522))?cljs.core.apply.call(null,cljs.core.hash_map,map__9522):map__9522);var channel = cljs.core.get.call(null,map__9522__$1,new cljs.core.Keyword(null,"channel","channel",734187692));var this$__$1 = this;return React.DOM.div({"className": "m-columns-wrapper"},cljs.core.apply.call(null,om.dom.ul,{"className": "m-columns cf"},om.core.build_all.call(null,omingard.core.column_view,self__.columns,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),channel], null)], null))));
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
omingard.core.t9526.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"omingard.core/t9526");
});
omingard.core.t9526.prototype.om$core$IRender$ = true;
omingard.core.t9526.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "l-navigation-container"},React.DOM.ul({"className": "m-navigation cf"},React.DOM.li({"className": "m-navigation--item"},React.DOM.h1({"className": "m-navigation--title"},"Omingard")),React.DOM.li({"className": "m-navigation--item as-right"},React.DOM.button({"onClick": ((function (this$__$1){
return (function (_){return om.core.transact_BANG_.call(null,self__.app,omingard.core.serve_new_cards);
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
omingard.core.t9534.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"omingard.core/t9534");
});
omingard.core.t9534.prototype.om$core$IRenderState$ = true;
omingard.core.t9534.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9537){var self__ = this;
var map__9538 = p__9537;var map__9538__$1 = ((cljs.core.seq_QMARK_.call(null,map__9538))?cljs.core.apply.call(null,cljs.core.hash_map,map__9538):map__9538);var channel = cljs.core.get.call(null,map__9538__$1,new cljs.core.Keyword(null,"channel","channel",734187692));var this$__$1 = this;return React.DOM.li({"className": "m-pile"},(function (){var cards = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(self__.pile);if(cljs.core.seq.call(null,cards))
{return cljs.core.apply.call(null,om.dom.ul,{"className": "m-pile--cards"},om.core.build_all.call(null,omingard.core.card_view,cards,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),channel], null)], null)));
} else
{var suit = new cljs.core.Keyword(null,"suit","suit",-869827520).cljs$core$IFn$_invoke$arity$1(self__.pile);return React.DOM.span({"className": ("m-pile--placeholder "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(omingard.core.colour.call(null,suit)))},omingard.core.symbol_for_suit.call(null,suit));
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
omingard.core.t9544.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"omingard.core/t9544");
});
omingard.core.t9544.prototype.om$core$IRenderState$ = true;
omingard.core.t9544.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9547){var self__ = this;
var map__9548 = p__9547;var map__9548__$1 = ((cljs.core.seq_QMARK_.call(null,map__9548))?cljs.core.apply.call(null,cljs.core.hash_map,map__9548):map__9548);var channel = cljs.core.get.call(null,map__9548__$1,new cljs.core.Keyword(null,"channel","channel",734187692));var this$__$1 = this;return React.DOM.div({"className": "l-piles-container"},React.DOM.h3(null,"Piles"),cljs.core.apply.call(null,om.dom.ul,{"className": "m-piles cf"},om.core.build_all.call(null,omingard.core.pile_view,self__.piles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),channel], null)], null))));
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
omingard.core.t9578.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"omingard.core/t9578");
});
omingard.core.t9578.prototype.om$core$IRenderState$ = true;
omingard.core.t9578.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9581){var self__ = this;
var map__9582 = p__9581;var map__9582__$1 = ((cljs.core.seq_QMARK_.call(null,map__9582))?cljs.core.apply.call(null,cljs.core.hash_map,map__9582):map__9582);var channel = cljs.core.get.call(null,map__9582__$1,new cljs.core.Keyword(null,"channel","channel",734187692));var this$__$1 = this;return React.DOM.div({"onKeyDown": ((function (this$__$1,map__9582,map__9582__$1,channel){
return (function (event){if(cljs.core._EQ_.call(null,(13),event.keyCode))
{return om.core.transact_BANG_.call(null,self__.app,omingard.core.serve_new_cards);
} else
{return null;
}
});})(this$__$1,map__9582,map__9582__$1,channel))
, "tabIndex": (0), "className": "omingard-wrapper"},om.core.build.call(null,omingard.core.navigation_view,self__.app),React.DOM.div({"className": "l-game-container"},om.core.build.call(null,omingard.core.columns_view,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),channel], null)], null)),React.DOM.div({"className": "l-debug"},React.DOM.h3(null,"Debug (newest click events first)"),cljs.core.apply.call(null,om.dom.ul,{"className": "m-debug-texts"},cljs.core.map_indexed.call(null,((function (this$__$1,map__9582,map__9582__$1,channel){
return (function (idx,el){return React.DOM.li({"className": "m-debug-texts--item"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count.call(null,new cljs.core.Keyword(null,"debug-texts","debug-texts",-1596002918).cljs$core$IFn$_invoke$arity$1(self__.app)) - idx))+". "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
});})(this$__$1,map__9582,map__9582__$1,channel))
,new cljs.core.Keyword(null,"debug-texts","debug-texts",-1596002918).cljs$core$IFn$_invoke$arity$1(self__.app)))),om.core.build.call(null,omingard.core.piles_view,new cljs.core.Keyword(null,"piles","piles",1943114450).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),channel], null)], null))));
});
omingard.core.t9578.prototype.om$core$IDidMount$ = true;
omingard.core.t9578.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core.get_node.call(null,self__.owner).focus();
});
omingard.core.t9578.prototype.om$core$IWillMount$ = true;
omingard.core.t9578.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"channel","channel",734187692));var c__6357__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6357__auto__,channel,___$1){
return (function (){var f__6358__auto__ = (function (){var switch__6342__auto__ = ((function (c__6357__auto__,channel,___$1){
return (function (state_9595){var state_val_9596 = (state_9595[(1)]);if((state_val_9596 === (4)))
{var inst_9586 = (state_9595[(2)]);var inst_9587 = cljs.core.nth.call(null,inst_9586,(0),null);var inst_9588 = cljs.core.nthnext.call(null,inst_9586,(1));var inst_9589 = (function (){var attrs = inst_9588;var func = inst_9587;var vec__9584 = inst_9586;return ((function (attrs,func,vec__9584,inst_9586,inst_9587,inst_9588,state_val_9596,c__6357__auto__,channel,___$1){
return (function (xs){return cljs.core.apply.call(null,func,xs,attrs);
});
;})(attrs,func,vec__9584,inst_9586,inst_9587,inst_9588,state_val_9596,c__6357__auto__,channel,___$1))
})();var inst_9590 = om.core.transact_BANG_.call(null,self__.app,inst_9589);var state_9595__$1 = (function (){var statearr_9597 = state_9595;(statearr_9597[(7)] = inst_9590);
return statearr_9597;
})();var statearr_9598_9607 = state_9595__$1;(statearr_9598_9607[(2)] = null);
(statearr_9598_9607[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9596 === (3)))
{var inst_9593 = (state_9595[(2)]);var state_9595__$1 = state_9595;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9595__$1,inst_9593);
} else
{if((state_val_9596 === (2)))
{var state_9595__$1 = state_9595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9595__$1,(4),channel);
} else
{if((state_val_9596 === (1)))
{var state_9595__$1 = state_9595;var statearr_9599_9608 = state_9595__$1;(statearr_9599_9608[(2)] = null);
(statearr_9599_9608[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var result__6345__auto__ = switch__6342__auto__.call(null,state_9595);if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
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
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9595);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
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
})();var state__6359__auto__ = (function (){var statearr_9606 = f__6358__auto__.call(null);(statearr_9606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6357__auto__);
return statearr_9606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6359__auto__);
});})(c__6357__auto__,channel,___$1))
);
return c__6357__auto__;
});
omingard.core.t9578.prototype.om$core$IInitState$ = true;
omingard.core.t9578.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),cljs.core.async.chan.call(null)], null);
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
om.core.root.call(null,omingard.core.omingard_view,omingard.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("omingard")], null));
omingard.core.app_history = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,omingard.core.app_state)], null));
cljs.core.add_watch.call(null,omingard.core.app_state,new cljs.core.Keyword(null,"history","history",-247395220),(function (_,___$1,___$2,n){if(cljs.core._EQ_.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,omingard.core.app_history)),n))
{return null;
} else
{return cljs.core.swap_BANG_.call(null,omingard.core.app_history,cljs.core.conj,n);
}
}));
(window["undo"] = (function (e){if((cljs.core.count.call(null,cljs.core.deref.call(null,omingard.core.app_history)) > (1)))
{cljs.core.swap_BANG_.call(null,omingard.core.app_history,cljs.core.pop);
return cljs.core.reset_BANG_.call(null,omingard.core.app_state,cljs.core.last.call(null,cljs.core.deref.call(null,omingard.core.app_history)));
} else
{return null;
}
}));

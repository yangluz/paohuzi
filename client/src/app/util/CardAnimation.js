/**
 * 牌的一些动画类
 * Created by xhl on 2014/7/19.
 */
var CardAnimation = {};


///**
// * 从卡槽里抽出一张牌出来 的动画
// * @param  cardSprite对象
// * @param sendDirection 方位，自己为0，逆时针分别累加为1,2
// */
//CardAnimation.outputAnimationByOne = function(cardSprite,sendDirection){
//    cardSprite.setScale(0);
////    //var action = cc.FadeIn.create(0.01)
////    var action = cc.ScaleTo.create(0.01, 1)
////    var action = cc.MoveTo.create(0.1, cc.p(display.cx, display.bottom + 100))
//
//    transition.scaleTo(cardSprite, {scale : 1, time : 1.5});
//    transition.moveTo(cardSprite, {y : display.bottom + 200, time : 1.5})
//}



/**
 * 某个用户出牌
 * @param cardSprite
 * @param startPos
 * @param middlePos
 * @param endPos
 */
CardAnimation.sendOutCardByUser = function(cardSprite,startPos,middlePos,endPos){
    cardSprite.setPosition(startPos.x,startPos.y);
    cardSprite.setScale(0);


    var onMiddleComplete = function(){
        var onComplete = function(){
            cardSprite.initView(true,FightConstants.small_card);
            cardSprite.setScale(1);
        }
        var sequence = transition.sequence([
            cc.ScaleTo.create(1, 0.5, 0.5),
            cc.CallFunc.create(onComplete)
        ])
        cardSprite.runAction(sequence)
        transition.moveTo(cardSprite, {x : endPos.x, y:endPos.y, time : 1})
    }


    var sequence = transition.sequence([
        cc.ScaleTo.create(1, 1, 1),
        cc.CallFunc.create(onMiddleComplete)
    ])
    cardSprite.runAction(sequence)
    transition.moveTo(cardSprite, {x : middlePos.x, y:middlePos.y, time : 1})

}





















